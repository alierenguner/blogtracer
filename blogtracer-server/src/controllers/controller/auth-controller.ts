import { Request, Response } from 'express';
import { IController } from "@base/shared/global";
import { IControllerDependencies } from "../interfaces";

export interface IAuthController extends IController {
    token: (request: Request, response: Response) => any
    login: (request: Request, response: Response) => any
    register: (request: Request, response: Response) => any
} 

class AuthController implements IAuthController {
    public readonly token;
    public readonly login;
    public readonly register;
    
    constructor(dependencies: IControllerDependencies) {
        const authorizationService = dependencies.services.authorization;
        const authenticationService = dependencies.services.authentication;

        this.token = authorizationService.token;
        this.login = authenticationService.login;
        this.register = authenticationService.register;
    }
}

export default AuthController;