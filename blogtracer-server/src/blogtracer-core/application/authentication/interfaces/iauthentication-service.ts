import IAppService from "@core-shared/interfaces/markups/iservice";
import AuthenticationDtos from "../dtos";

interface IAuthenticationService extends IAppService {
    login: (input: AuthenticationDtos.ILoginInput) => Promise<AuthenticationDtos.ILoginOutput>, 
    register: (input: AuthenticationDtos.IRegisterInput) => Promise<AuthenticationDtos.IRegisterOutput>
}

export default IAuthenticationService;