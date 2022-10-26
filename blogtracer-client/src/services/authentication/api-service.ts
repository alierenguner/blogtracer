import api from "@/api";
import { ILoginInputDto, LoginInputDto } from "@/api/provider";

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
    public login = (data: ILoginInputDto) => {
        const input = new LoginInputDto(data);

        (api.authLogin(input) as any)
        .then((response: ResponseMessage<LoginData>) => {
            const accessToken = response.data?.accessToken;

            if (accessToken) {
                localStorage.setItem('token', accessToken);
            }
        })
    }

    public register = () => {

    }
}


const authenticationApiService = new AuthenticationAPIService();
export default authenticationApiService;