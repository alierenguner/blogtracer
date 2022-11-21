import IAuthenticationService from "@application/authentication/interfaces/iauthentication-service";
import IAuthorizationService from "@application/authorization/interfaces/iauthorization-service";
import IUserService from "@application/user/interfaces/iuser-service";

interface IServices {
    authentication: IAuthenticationService,
    authorization: IAuthorizationService,
    user: IUserService
}

export default IServices;