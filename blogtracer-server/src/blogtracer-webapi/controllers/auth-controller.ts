import express from "express";
import IControllerDependencies from "@core-shared/interfaces/dependencies/icontroller-dependencies";
import IAuthController from "./abstract/iauth-controller";
import { Authorize, Controller, Post } from "@common/decorators";
import ResponseMessage from "@infrastructure/response-message";
import Roles from "@core-shared/enums/roles";
import AuthenticationDtos from "@application/authentication/dtos";
import Permissions from "@core-shared/enums/permissions";

@Controller('/auth')
class AuthController implements IAuthController {
    private readonly _authorizationService;
    private readonly _authenticationService;

    constructor(dependencies: IControllerDependencies) {
        this._authorizationService = dependencies.services.authorization;
        this._authenticationService = dependencies.services.authentication;
    }

    @Post()
    @Authorize(Permissions.Auth.TOKEN)
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
    @Authorize(Permissions.Auth.LOGIN)
    async login(request: express.Request, response: express.Response) {
        const requestBody = request.body;

        const inputDto = new AuthenticationDtos.LoginInput({
            ipAddress: request.ip,
            loginId: requestBody.loginId,
            password: requestBody.password
        });

        const responseMessage = new ResponseMessage(response);
        this._authenticationService.login(inputDto)
            .then((result) => responseMessage.success({ data: result }))
            .catch((error) => responseMessage.error({ data: error }))
    }

    @Post()
    @Authorize(Permissions.Auth.REGISTER)
    register(request: express.Request, response: express.Response) {
        const requestBody = request.body;

        const inputDto = new AuthenticationDtos.RegisterInput({
            name: requestBody.name,
            email: requestBody.email,
            username: requestBody.username,
            password: requestBody.password
        })

        const responseMessage = new ResponseMessage(response);
        this._authenticationService.register(inputDto)
            .then((result) => responseMessage.success({ data: result }))
            .catch((error) => responseMessage.error({ data: error }))
    }
}

export default AuthController;