import getToken from "@common/utils/getToken";
import jwt from "@infrastructure/jwt";
import authorizationExceptionHandler from "@web-api/exception-handlers/authorization-handler";
import express from "express";
import IAuthMiddleware from "./abstract/iauth-middleware";

class AuthMiddleware implements IAuthMiddleware {
    /** Description: Verifies and decodes the JWT token. */
    token = (request: express.Request, response: express.Response, next: express.NextFunction) => {
        const tokenWithBearer = request.headers.authorization;
        if (tokenWithBearer) {
            const token = getToken(tokenWithBearer);
            if (token) {

                const tokenData = jwt.decode(token);
    
                
                if (tokenData) {
                    request.headers.authorization = JSON.stringify(tokenData);
                    next();
    
                } else {
                    authorizationExceptionHandler.handleTokenInvalidException(response);
                }

            } else {
                authorizationExceptionHandler.handleTokenInvalidException(response);
            }

        } else {
            request.headers.authorization = '{}';
            next();
        }
    }
}

export default AuthMiddleware;