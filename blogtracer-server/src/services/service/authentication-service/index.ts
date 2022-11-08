import { IServiceDependencies } from '@services//interfaces';
import { Request, Response } from 'express';
import { IService } from '@base/shared/global';
import AuthenticationLoginInputDto from '@base/dtos/AuthenticationLoginInputDto';
import AuthenticationLoginOutputDto from '@base/dtos/AuthenticationLoginOutputDto';
import Roles from '@base/shared/roles';
import authorizationHelper from '@base/helpers/authorization-helper';
import ResponseMessage from '@base/libs/response-message';
import AuthenticationRegisterInputDto from '@base/dtos/AuthenticationRegisterInputDto';
import AuthenticationManager from '@base/managers/authentication-manager';

class AuthenticationService implements IService {
    private _repository;
    private _manager;

    constructor(dependencies: IServiceDependencies) {
        this._repository = dependencies.repositories.authentication;
        this._manager = new AuthenticationManager();
    }

    public login = async (request: Request, response: Response) => {
        const responseMessage = new ResponseMessage(response);
        let result: AuthenticationLoginOutputDto | null = null;

        const bodyParams = request.body;

        const inputDto: AuthenticationLoginInputDto = {
            loginId: bodyParams.loginId,
            password: bodyParams.password
        }

        const inputValidation = this._manager.login(inputDto);
        if (inputValidation.isValid) {
            const loginData = await this._repository.login(inputDto);
            if (loginData) {
                const { id, name, username, email } = loginData;

                // generate an access token
                const accessToken = await authorizationHelper.sign({
                    id,
                    username,
                    email,
                    ipAddress: request.ip,
                    role: Roles.USER,
                });

                result = {
                    id,
                    name,
                    username,
                    email,
                    accessToken,
                    role: Roles.USER
                }
            }

            responseMessage.success<AuthenticationLoginOutputDto>({
                message: 'Successfully logged in.',
                data: result
            })

        } else {
            responseMessage.error<AuthenticationLoginOutputDto>({
                message: inputValidation.message,
                statusCode: 400
            })
        }
    }

    public register = async (request: Request, response: Response) => {
        const responseMessage = new ResponseMessage(response);
        const bodyParams = request.body;

        const input: AuthenticationRegisterInputDto = {
            name: bodyParams.name,
            username: bodyParams.username,
            email: bodyParams.email,
            password: bodyParams.password,
        }

        const inputValidation = this._manager.register(input);
        if (inputValidation.isValid) {
            const isRegistered = await this._repository.register(input);
            if (isRegistered) {
                responseMessage.success({
                    message: 'Successfully registered.'
                })

            } else {
                responseMessage.error({
                    message: 'Something went wrong.'
                })
            }

        } else {
            responseMessage.error({
                message: inputValidation.message
            })
        }
    }
}

export default AuthenticationService;