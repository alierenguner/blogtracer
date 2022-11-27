import IServiceDependencies from "@core-shared/interfaces/dependencies/iservice-dependencies";
import jwt from "@infrastructure/jwt";
import AuthenticationDtos from "./dtos";
import IAuthenticationService from "./interfaces/iauthentication-service";

class AuthenticationService implements IAuthenticationService {
    private readonly _authenticationRepository;
    
    constructor(dependencies: IServiceDependencies) {
        this._authenticationRepository = dependencies.repositories.authentication;
    }

    public login = async (input: AuthenticationDtos.ILoginInput): Promise<AuthenticationDtos.ILoginOutput> => {
        return new Promise((resolve, reject) => {
            const handleRejected = (reason: any) => reject(reason);

            this._authenticationRepository.login(input)
            .then(async (response) => {
                if (response) {
                    const token = await jwt.sign({ 
                        id: response.id,
                        ipAddress: input.ipAddress,
                        username: response.username,
                        email: response.email,
                        role: response.role.nam,
                    })
    
                    const result = new AuthenticationDtos.LoginOutput({
                        id: response.id,
                        name: response.name,
                        username: response.username,
                        email: response.email,
                        role: response.role?.name,
                        accessToken: token
                    })
    
                    resolve(result);

                } else {
                    handleRejected(response);
                }
                
            }).catch(handleRejected)

        })
    }

    public register = (input: AuthenticationDtos.IRegisterInput): Promise<AuthenticationDtos.IRegisterOutput> => {
        return new Promise((resolve, reject) => {
            const handleRejected = (reason: any) => reject(reason);
            
            this._authenticationRepository.register(input)
            .then(async (response) => {
                const { id, name, username } = response;
                
                const result = new AuthenticationDtos.RegisterOutput({
                    id,
                    name,
                    username
                });

                resolve(result);
            })
            .catch(handleRejected)
        })
    }
}

export default AuthenticationService;