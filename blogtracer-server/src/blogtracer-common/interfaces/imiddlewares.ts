import IAuthMiddleware from "@web-api/middlewares/abstract/iauth-middleware";

interface IMiddlewares {
    auth: IAuthMiddleware
}

export default IMiddlewares;