import Dependencies from "@base/shared/dependencies";
import AuthorizationMiddleware from "./middleware/authorization-middleware";

export interface IMiddlewares {
    authorization: AuthorizationMiddleware
}

export interface IMiddlewareDependencies extends Dependencies.Services {};