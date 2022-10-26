import { IServices, IServiceDependencies } from "./interfaces";
import AuthenticationService from "./service/authentication-service";
import AuthorizationService from "./service/authorization-service";
import UserService from "./service/user-service";

class Services implements IServices {
    public readonly user;
    public readonly authentication;
    public readonly authorization;

    constructor(dependencies: IServiceDependencies) {
        this.user = new UserService(dependencies);
        this.authentication = new AuthenticationService(dependencies);
        this.authorization = new AuthorizationService();
    }
}

export default Services;