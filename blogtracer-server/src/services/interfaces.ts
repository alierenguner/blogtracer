import Dependencies from "@base/shared/dependencies";
import AuthenticationService from "./service/authentication-service";
import AuthorizationService from "./service/authorization-service";
import UserService from "./service/user-service";

export interface IServices {
    user: UserService,
    authentication: AuthenticationService
    authorization: AuthorizationService,
}

export interface IServiceDependencies extends Dependencies.Repositories {}