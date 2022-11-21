import IAppService from "@/blogtracer-core/shared/interfaces/iservice";
import AuthorizationDtos from "../dtos";

interface IAuthorizationService extends IAppService {
    token: (input: AuthorizationDtos.ITokenInput) => Promise<AuthorizationDtos.ITokenOutput> 
}
export default IAuthorizationService;