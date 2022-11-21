import IServiceDependencies from "@common/interfaces/iservice-dependencies";
import AuthenticationDtos from "./dtos";
import IAuthenticationService from "./interfaces/iauthentication-service";
import AuthenticationValidator from "./validator";

class AuthenticationService implements IAuthenticationService {
    private readonly _validator;
    
    constructor(dependencies: IServiceDependencies) {
        this._validator = new AuthenticationValidator();
    }

    public login = (input: AuthenticationDtos.ILoginInput) => {
        const result = new AuthenticationDtos.LoginOutput();

        return result;
    }

    public register = (input: AuthenticationDtos.IRegisterInput) => {
        const result = new AuthenticationDtos.RegisterOutput();
        
        return result;
    }
}

export default AuthenticationService;