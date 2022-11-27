export interface IAuthenticationLoginInputDto {
    ipAddress: string,
    loginId: string,
    password: string
}

export interface IAuthenticationLoginOutputDto {
    id: string,
    name: string,
    username: string,
    email: string,
    accessToken: string,
    role: any
}