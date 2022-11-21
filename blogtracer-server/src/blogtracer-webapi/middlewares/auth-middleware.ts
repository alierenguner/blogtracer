import express from "express";
import IAuthMiddleware from "./abstract/iauth-middleware";

class AuthMiddleware implements IAuthMiddleware {
    token = (request: express.Request, response: express.Response, next: express.NextFunction) => {
        const tokenWithBearer = request.headers.authorization;

        if (tokenWithBearer) {
            //...
        }

        next();
    }
}

export default AuthMiddleware;