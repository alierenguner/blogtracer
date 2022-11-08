import Roles from "@base/shared/roles";
import createDto from "@base/utils/createDto";

export interface IAuthorizationTokenInput {
    id: string,
    username: string,
    email: string,
    role: Roles,
    ipAddress: string,
}

export const AuthorizationTokenInputDto = createDto<IAuthorizationTokenInput>();

export interface IAuthorizationTokenOutput {
    accessToken: string
}

export const AuthorizationTokenOutputDto = createDto<IAuthorizationTokenOutput>();
