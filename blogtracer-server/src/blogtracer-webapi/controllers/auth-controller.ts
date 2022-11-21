import express from "express";
import IControllerDependencies from "@common/interfaces/icontroller-dependencies";
import IAuthController from "./abstract/iauth-controller";
import { Controller, Post } from "@common/decorators";
import ResponseMessage from "@infrastructure/response-message";
import Roles from "@common/enums/roles";

@Controller('/auth')
class AuthController implements IAuthController {
    private readonly _authorizationService;
    private readonly _authenticationService;

    constructor(dependencies: IControllerDependencies) {
        this._authorizationService = dependencies.services.authorization;
        this._authenticationService = dependencies.services.authentication;
    }

    @Post()
    async token(request: express.Request, response: express.Response) {
        const responseMessage = new ResponseMessage(response);

        const result = await this._authorizationService.token({
            id: 'undefined',
            email: 'undefined',
            username: 'undefined',
            ipAddress: request.ip,
            role: Roles.GUEST,
        })
        .catch((error) => {
            return responseMessage.error({ message: error }) 
        })

        return responseMessage.success({ data: result });
    }

    @Post()
    login(request: express.Request, response: express.Response) {
        
    }

    @Post()
    register(request: express.Request, response: express.Response) {

    }
}

export default AuthController;