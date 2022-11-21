import createDto from "@common/utils/createDto";
import { IAuthorizationTokenInputDto, IAuthorizationTokenOutputDto } from "./interfaces/i-token-dtos";

namespace AuthorizationDtos {
    // Token()
    export const TokenInput = createDto<IAuthorizationTokenInputDto>();
    export const TokenOutput = createDto<IAuthorizationTokenOutputDto>();
    // types
    export type ITokenInput = IAuthorizationTokenInputDto;
    export type ITokenOutput = IAuthorizationTokenOutputDto;
}

export default AuthorizationDtos;