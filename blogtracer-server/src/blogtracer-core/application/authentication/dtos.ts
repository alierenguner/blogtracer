import createDto from "@common/utils/createDto";
import { IAuthenticationLoginInputDto, IAuthenticationLoginOutputDto } from "./interfaces/i-login-dtos";
import { IAuthenticationRegisterInputDto, IAuthenticationRegisterOutputDto } from "./interfaces/i-register-dtos";

namespace AuthenticationDtos {
    // BEGIN LOGIN()
    export const LoginInput = createDto<IAuthenticationLoginInputDto>()
    export const LoginOutput = createDto<IAuthenticationLoginOutputDto>()
    // types
    export type ILoginInput = IAuthenticationLoginInputDto;
    export type ILoginOutput = IAuthenticationLoginOutputDto;
    // END LOGIN()

    // BEGIN REGISTER()
    export const RegisterInput = createDto<IAuthenticationRegisterInputDto>()
    export const RegisterOutput = createDto<IAuthenticationRegisterOutputDto>()
    // types
    export type IRegisterInput = IAuthenticationLoginInputDto;
    export type IRegisterOutput = IAuthenticationLoginOutputDto;
    // END REGISTER()
}

export default AuthenticationDtos;