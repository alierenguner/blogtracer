import IServiceDependencies from "@core-shared/interfaces/dependencies/iservice-dependencies";
import authenticationExceptionHandler from "@domain/authentication/exception-handler";
import AuthenticationFailedException from "@domain/authentication/exceptions/authentication-failed-exception";
import jwt from "@infrastructure/jwt";
import AuthenticationDtos from "./dtos";
import IAuthenticationService from "./interfaces/iauthentication-service";
import AuthenticationValidator from "./validator";

class AuthenticationService implements IAuthenticationService {
    private readonly _authenticationRepository;
    private readonly _authenticationValidator;
    
    constructor(dependencies: IServiceDependencies) {
        this._authenticationRepository = dependencies.repositories.authentication;
        this._authenticationValidator = new AuthenticationValidator();
    }

    public login = async (input: AuthenticationDtos.ILoginInput): Promise<AuthenticationDtos.ILoginOutput> => {
        const validation =  this._authenticationValidator.validateLogin(input);
        if (validation.isValid) {
            const response = await this._authenticationRepository.login(input);
            if (response) {
                // if login is approved
                const token = await jwt.sign({ 
                    id: response.id,
                    ipAddress: input.ipAddress,
                    username: response.username,
                    email: response.email,
                    role: response.role.nam,
                })
    
                return new AuthenticationDtos.LoginOutput({
                    id: response.id,
                    name: response.name,
                    username: response.username,
                    email: response.email,
                    role: response.role?.name,
                    accessToken: token

                });
            } 
            
            throw new AuthenticationFailedException(); 

        } 
        
        throw validation.exception;
    }

    public register = async (input: AuthenticationDtos.IRegisterInput): Promise<AuthenticationDtos.IRegisterOutput> => {
        const validation = this._authenticationValidator.validateRegister(input);
        if (validation.isValid) {
            const response = await this._authenticationRepository.register(input)
                .catch(authenticationExceptionHandler.handleException);

            if (response) {
                const { id, name, username } = response;
    
                return new AuthenticationDtos.RegisterOutput({
                    id,
                    name,
                    username

                });;

            } 
        }
        
        throw validation.exception;
    }
}

export default AuthenticationService;