import Roles from "@core-shared/enums/roles";

export interface IAuthorizationTokenInputDto {
    id: string,
    username: string,
    email: string,
    role: Roles,
    ipAddress: string,
}

export interface IAuthorizationTokenOutputDto {
    accessToken: string
}