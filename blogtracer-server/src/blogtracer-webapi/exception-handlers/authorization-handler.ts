import e from "express";
import TokenExpiredException from "@infrastructure/jwt/exceptions/token-expired-exception";
import TokenInvalidException from "@infrastructure/jwt/exceptions/token-invalid-exception";
import ResponseMessage from "@infrastructure/response-message";
import UnauthorizedException from "@core-shared/global-exceptions/unauthorized-exception";

class AuthorizationExceptionHandler {
    public handleTokenExpiredException = (response: e.Response) => {
        const responseMessage = new ResponseMessage(response);
        const { message, statusCode } = new TokenExpiredException();

        responseMessage.error({ message, statusCode });
    } 

    public handleTokenInvalidException = (response: e.Response) => {
        const responseMessage = new ResponseMessage(response);
        const { message, statusCode } = new TokenInvalidException();

        responseMessage.error({ message, statusCode });
    } 

    public handleUnauthorizedException = (response: e.Response) => {
        const responseMessage = new ResponseMessage(response);
        const { message, statusCode } = new UnauthorizedException();

        responseMessage.error({ message, statusCode });
    }
}

const authorizationExceptionHandler = new AuthorizationExceptionHandler();
export default authorizationExceptionHandler;