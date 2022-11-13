import { Request, Response } from 'express';
import { IController } from "@base/shared/global";
import { IControllerDependencies } from "../interfaces";
import {  Authorize, Controller, Post } from '@base/decorators';
import Permissions from '@base/libs/authorization/permissions';
import bindContextToMethods from '@base/utils/bindContextToMethods';

export interface IAuthController extends IController {
    token: (request: Request, response: Response) => any
    login: (request: Request, response: Response) => any
    register: (request: Request, response: Response) => any
}

@Controller('/auth')
class AuthController implements IAuthController {
    private readonly _authorizationService;
    private readonly _authenticationService;

    constructor(dependencies: IControllerDependencies) {
        bindContextToMethods(this);  

        this._authorizationService = dependencies.services.authorization;
        this._authenticationService = dependencies.services.authentication;
    }

    @Post()
    @Authorize(Permissions.AUTH_TOKEN)
    token(request: Request, response: Response) {
        this._authorizationService.token(request, response);
    }

    @Post()
    @Authorize(Permissions.AUTH_LOGIN)
    login(request: Request, response: Response) {
        this._authenticationService.login(request, response);
    }

    @Post()
    @Authorize(Permissions.AUTH_REGISTER)
    register(request: Request, response: Response) {
        this._authenticationService.register(request, response);
    } 
}

export default AuthController;