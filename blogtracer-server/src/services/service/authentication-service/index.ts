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
    private _authRepository;
    private _userRole;
    private _manager;

    constructor(dependencies: IServiceDependencies) {
        this._authRepository = dependencies.repositories.authentication;
        this._userRole = dependencies.repositories.userRole;
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
            await this._authRepository.login(inputDto)
                .then(async (loginData) => {
                    const { id, name, username, email, role } = loginData;

                    // generate an access token
                    const accessToken = await authorizationHelper.sign({
                        id,
                        username,
                        email,
                        ipAddress: request.ip,
                        role: role.name,
                    });
    
                    result = {
                        id,
                        name,
                        username,
                        email,
                        role: role.name,
                        accessToken
                    }

                    responseMessage.success<AuthenticationLoginOutputDto>({
                        message: 'Successfully logged in.',
                        data: result
                    })
                })
                .catch((error) => {
                    responseMessage.error<AuthenticationLoginOutputDto>({
                        message: inputValidation.message,
                        statusCode: 400
                    })
                })
           

        } else {
            
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
            await this._authRepository.register(input)
                .then(async (registerData) => {
                    await this._userRole.create({ role_id: process.env.USER_ROLE_ID,  user_id: registerData.id }) // todo: change role id source

                    responseMessage.success({
                        message: 'Successfully registered.'
                    })
                })
                .catch((error) => {
                    responseMessage.error({
                        message: 'Something went wrong.'
                    })
                });

        } else {
            responseMessage.error({
                message: inputValidation.message
            })
        }
    }
}

export default AuthenticationService;