import express from "express";
import IControllerDependencies from "@core-shared/interfaces/dependencies/icontroller-dependencies";
import IAuthController from "./abstract/iauth-controller";
import { Authorize, Controller, Post } from "@common/decorators";
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

    @Authorize(Permissions.Auth.TOKEN)
    @Post()
    token(request: express.Request, response: express.Response) {
        return this._authorizationService.token({
            id: 'undefined',
            email: 'undefined',
            username: 'undefined',
            ipAddress: request.ip,
            role: Roles.GUEST,

        })
    }

    @Authorize(Permissions.Auth.LOGIN)
    @Post()
    login(request: express.Request, response: express.Response) {
        const inputDto = new AuthenticationDtos.LoginInput({
            ipAddress: request.ip,
            loginId: request.body.loginId,
            password: request.body.password
        });

        return this._authenticationService.login(inputDto); 
    }

    @Authorize(Permissions.Auth.REGISTER)
    @Post()
    register(request: express.Request, response: express.Response) {
        const inputDto = new AuthenticationDtos.RegisterInput({
            name: request.body.name,
            email: request.body.email,
            username: request.body.username,
            password: request.body.password
        })

        return this._authenticationService.register(inputDto);
    }
}

export default AuthController;