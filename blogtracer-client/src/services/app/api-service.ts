import api from "@/api";
import { TokenInputDto } from "@/api/provider";

class AppAPIService {
    getToken = () => {
        const token = localStorage.getItem('token');

        if (!token) {
            api.authToken(new TokenInputDto())
                .then((response: any) => {
                    localStorage.setItem('token', response.accessToken);
                });
        }
    }
}

const appApiService = new AppAPIService();
export default appApiService;