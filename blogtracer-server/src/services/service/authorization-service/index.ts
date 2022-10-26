import AuthorizationSignInputDto from '@base/dtos/AuthorizationSignInputDto';
import authorizationHelper from '@base/helpers/authorization-helper';
import Roles from '@base/shared/roles';
import generateId from '@base/utils/generateId';
import { Request, Response } from 'express';

class AuthorizationService {
    public token = async (request: Request, response: Response) => {
        const id = generateId(); 
        
        const payload: AuthorizationSignInputDto = {
            id: id,
            username: 'none',
            email: 'none',
            ipAddress: request.ip,
            role: Roles.GUEST,
        }

        const token = await authorizationHelper.sign(payload);
        
        response.send({
            accessToken: token
        })
    }
}

export default AuthorizationService;