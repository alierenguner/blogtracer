import { Request, Response } from 'express';
import { IController } from "@base/shared/global";
import { IControllerDependencies } from "../interfaces";
import { Controller, Post } from '@base/decorators';

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
        this._authorizationService = dependencies.services.authorization;
        this._authenticationService = dependencies.services.authentication;
    }

    @Post()
    token = async (request: Request, response: Response) =>
        this._authorizationService.token(request, response);

    @Post()
    login = (request: Request, response: Response) =>
        this._authenticationService.login(request, response);

    @Post()
    register = (request: Request, response: Response) => 
        this._authenticationService.register(request, response);
}

export default AuthController;