import { IMiddlewareDependencies } from "./interfaces";
import AuthorizationMiddleware from "./middleware/authorization-middleware";

class Middlewares {
    public readonly authorization;

    constructor(dependencies: IMiddlewareDependencies) {
        this.authorization = new AuthorizationMiddleware(dependencies); 
    }

}

export default Middlewares;