import e from "express";
import Roles from "@core-shared/enums/roles";
import authOrganization from "@infrastructure/auth-organization";
import authorizationExceptionHandler from "@web-api/exception-handlers/authorization-handler";

/** Description: Checks the authorization controls of the method used. */
const authorizeDecorator = (permission: string) => (target: Object, propertyName: string, descriptor: TypedPropertyDescriptor<any>) => {
    const originalMethod = descriptor;

    descriptor.value = new Proxy(target.constructor.prototype[propertyName], {
        apply(target, thisArg, argArray) {
            const [request, response] = argArray as [e.Request, e.Response];

            // get the jwt token object
            const headerAuthorization = request.headers.authorization || '{}';
            const token = JSON.parse(headerAuthorization);

            // get the user role
            const role = token.role || Roles.NONE;
            const rolePermissions: string[] = authOrganization.permissions.get(role);

            // check the user permissions
            const hasPermission = rolePermissions.some((rolePermission) => rolePermission === permission);
            if (hasPermission) {
                return target.bind(thisArg)(...argArray);

            } else {
                authorizationExceptionHandler.handleUnauthorizedException(response);
            }
        },
    });
    
    return originalMethod;
}

export default authorizeDecorator;