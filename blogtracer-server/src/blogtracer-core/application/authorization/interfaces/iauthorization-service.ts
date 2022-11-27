import IAppService from "@core-shared/interfaces/markups/iservice";
import AuthorizationDtos from "../dtos";

interface IAuthorizationService extends IAppService {
    token: (input: AuthorizationDtos.ITokenInput) => Promise<AuthorizationDtos.ITokenOutput> 
}
export default IAuthorizationService;