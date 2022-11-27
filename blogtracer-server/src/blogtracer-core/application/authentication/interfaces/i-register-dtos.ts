export interface IAuthenticationRegisterInputDto {
    name: string,
    email: string,
    username: string,
    password: string
}

export interface IAuthenticationRegisterOutputDto {
    id: string,
    name: string,
    username: string
}