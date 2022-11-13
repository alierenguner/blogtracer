import authorization from "@base/libs/authorization";
import ResponseMessage from "@base/libs/response-message";
import Roles from "@base/shared/roles";
import { Request, Response } from "express";

/** Description: Checks the authorization controls of the method used. */
const authorizeDecorator = (permission: string) => (target: Object, propertyName: string, descriptor: TypedPropertyDescriptor<any>) => {
    const originalMethod = descriptor;

    // descriptor.value = (...args: any[]) => {
    //     originalMethod(args);
    // }

    descriptor.value = new Proxy(target.constructor.prototype[propertyName], {
        apply(target, ref, args) {
            const [request, response] = args as [Request, Response];

            const headerAuthorization = request.headers.authorization || '{}';
            const token = JSON.parse(headerAuthorization);
            
            const tokenRole = token.role || Roles.NONE;
            
            const rolePermissions: string[] = authorization.organization.get(tokenRole)

            const hasPermission = rolePermissions?.find((_permission) => _permission === permission);
            if (hasPermission) {
                return target.bind(ref)(...args);

            } else {
                const responseMessage = new ResponseMessage(response);
                responseMessage.error({ message: 'Unauthorized access attempt.', statusCode: 401 });
            }
        },
    })


    return originalMethod;
}

export default authorizeDecorator;