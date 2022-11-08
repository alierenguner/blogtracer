import { Request, Response } from 'express';
import authorizationHelper from '@base/helpers/authorization-helper';
import generateId from '@base/utils/generateId';
import Roles from '@base/shared/roles';
import ResponseMessage from '@base/libs/response-message';
import { IAuthorizationTokenInput, IAuthorizationTokenOutput } from '@base/dtos/AuthorizationDtos';

class AuthorizationService {
    public token = async (request: Request, response: Response) => {
        const responseMessage = new ResponseMessage(response);
        let result: IAuthorizationTokenOutput | null = null;

        const id = generateId(); 
        
        const inputDto: IAuthorizationTokenInput = {
            id: id,
            username: 'none',
            email: 'none',
            ipAddress: request.ip,
            role: Roles.GUEST,
        }

        const token = await authorizationHelper.sign(inputDto);
        result = {
            accessToken: token
        }

        responseMessage.success<IAuthorizationTokenOutput>({
            data: result
        })
    }
}

export default AuthorizationService;