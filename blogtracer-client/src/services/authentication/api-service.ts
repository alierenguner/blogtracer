import api from "@/api";
import { ILoginInputDto, IRegisterInputDto, LoginInputDto, RegisterInputDto } from "@/api/provider";
import AuthenticationValidator from "./validator";

interface ResponseMessage<T> {
    message?: string,
    data?: T
    success: boolean
}

interface LoginData {
    id: string,
    name: string,
    username: string,
    email: string,
    accessToken: string,
    role: string,
}

class AuthenticationAPIService {
    private readonly _validator;

    constructor() {
        this._validator = new AuthenticationValidator();
    }

    /** Description: Logs in the user to system. */
    public login = (data: ILoginInputDto) => {
        const input = new LoginInputDto(data);

        const validation = this._validator.validateLogin(input);
        if (validation.isValid) {
            // send request
            (api.authLogin(input) as any)
            .then((response: ResponseMessage<LoginData>) => {
                const accessToken = response.data?.accessToken;
    
                if (accessToken) {
                    localStorage.setItem('token', accessToken);
                }
            })

        } else {
            // show messages
            Object.entries(validation.message).forEach(([field, message]) => console.error(`ERROR: ${message} - ${field}`));
        }
    }

    /** Description: Registers the user in the system. */
    public register = (data: IRegisterInputDto) => {
        const input = new RegisterInputDto(data);

        const validation = this._validator.validateRegister(input);
        if (validation.isValid) {
            // send request
            (api.authRegister(input) as any)
            .then((response: ResponseMessage<any>) => {
                
            })

        } else {
            // show messages
            Object.entries(validation.message).forEach(([field, message]) => console.error(`ERROR: ${message} - ${field}`));
        }

    }
}


const authenticationApiService = new AuthenticationAPIService();
export default authenticationApiService;