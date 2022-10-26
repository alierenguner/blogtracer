import authorizationHelper from "@base/helpers/authorization-helper";
import Roles from "@base/shared/roles";
import getToken from "@base/utils/getToken";
import isPermissionGranted from "@base/utils/isPermissionGranted";
import { Request, Response, NextFunction } from "express";
import { IMiddlewareDependencies } from "../interfaces";

class AuthorizationMiddleware {
    private readonly _service;

    constructor(dependencies: IMiddlewareDependencies) {
        this._service = dependencies.services.authorization;
    }

    public verify = (request: Request, response: Response, next: NextFunction) => {
        let tokenWithBearer = request.headers.authorization;
        let role = Roles.NONE;
        let tokenData: any = {};

        if (tokenWithBearer) {
            tokenWithBearer = tokenWithBearer?.toString(); 
            const token = getToken(tokenWithBearer); 
            tokenData = authorizationHelper.decode(token); 
            
            console.log(tokenData?.role);
            
            if (tokenData?.role) {
                role = tokenData.role;
            }
        }

        if (role !== Roles.NONE) {
            // check the host
            if (request.host !== tokenData?.aud) {
                console.log('req host', request.host);
                console.log('token host', tokenData?.aud);
                
                response.send({ 'message': 'only accessable on blogtracer.com' }).status(403);
    
                return;
            }
    
            // ip address
            // if (request.ip !== tokenData?.ipAddress) {
            //     console.log('request ip', request.ip);
            //     console.log('token ip', tokenData.ipAddress);
                
            //     response.send({ 'message': 'doesnt match with ip address' }).status(403);
    
            //     return;
            // }   
        }

        const isGranted = isPermissionGranted(role, request.path);

        if (isGranted) {
            next();

        } else {
            response.status(401).send({ 'message': 'Unauthorized access attempt.' });
        }

    }

}

export default AuthorizationMiddleware;