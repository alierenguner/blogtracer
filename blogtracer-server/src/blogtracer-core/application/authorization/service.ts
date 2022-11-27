import IServiceDependencies from "@core-shared/interfaces/dependencies/iservice-dependencies";
import jwt from "@infrastructure/jwt";
import AuthorizationDtos from "./dtos";
import IAuthorizationService from "./interfaces/iauthorization-service";
import AuthorizationValidator from "./validator";

class AuthorizationService implements IAuthorizationService {
    private readonly _validator;
    
    constructor(dependencies: IServiceDependencies) {
        this._validator = new AuthorizationValidator();
    }

    public token = async (input: AuthorizationDtos.ITokenInput): Promise<AuthorizationDtos.ITokenOutput> => {
        const result = new AuthorizationDtos.TokenOutput();

        await jwt.sign(input)
        .then((token) => {
            result.accessToken = token;
        });
        
        return result; 
    }
}

export default AuthorizationService;