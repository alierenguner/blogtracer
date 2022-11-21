import IServices from "@common/interfaces/iservices";
import IServiceDependencies from "@common/interfaces/iservice-dependencies";
import IUserService from "@application/user/interfaces/iuser-service";
import UserService from "@application/user/service";
import IAuthenticationService from "@application/authentication/interfaces/iauthentication-service";
import AuthenticationService from "@application/authentication/service";
import IAuthorizationService from "@application/authorization/interfaces/iauthorization-service";
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