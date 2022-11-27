import IServices from "@common/operator-interfaces/iservices";
import IServiceDependencies from "@core-shared/interfaces/dependencies/iservice-dependencies";
// Service interfaces
import IUserService from "@application/user/interfaces/iuser-service";
import IAuthenticationService from "@application/authentication/interfaces/iauthentication-service";
import IAuthorizationService from "@application/authorization/interfaces/iauthorization-service";
// Services
import UserService from "@application/user/service";
import AuthenticationService from "@application/authentication/service";
import AuthorizationService from "@application/authorization/service";

class ServiceInitiator implements IServices {
    public user: IUserService;
    public authentication: IAuthenticationService;
    public authorization: IAuthorizationService;

    constructor(dependencies: IServiceDependencies) {
        this.user = new UserService(dependencies);
        this.authentication = new AuthenticationService(dependencies);
        this.authorization = new AuthorizationService(dependencies);
    }
}

export default ServiceInitiator;