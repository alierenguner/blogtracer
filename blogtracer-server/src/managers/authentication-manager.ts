import AuthenticationLoginInputDto from "@base/dtos/AuthenticationLoginInputDto";
import AuthenticationRegisterInputDto from "@base/dtos/AuthenticationRegisterInputDto";
import { EMPTY_INPUT } from "@base/shared/constants";

class AuthenticationManager {
    public login = (input: AuthenticationLoginInputDto) => {
        const result = { isValid: true, message: [] as string[] };

        if (!input.loginId?.length) {
            result.isValid = false;
            result.message.push(`${EMPTY_INPUT} - loginId`);

        } else if (!input?.password) {
            result.isValid = false;
            result.message.push(`${EMPTY_INPUT} - password`);
        }

        // todo - validations should be improved 
        
        return result;
    }

    public register = (input: AuthenticationRegisterInputDto) => {
        const result = { isValid: true, message: [] as string[] };

        if (!input.name?.length) {
            result.isValid = false;
            result.message.push(`${EMPTY_INPUT} - name`);

        } else if (!input?.username) {
            result.isValid = false;
            result.message.push(`${EMPTY_INPUT} - username`);
        
        } else if (!input?.email) {
            result.isValid = false;
            result.message.push(`${EMPTY_INPUT} - email`);
        
        } else if (!input?.password) {
            result.isValid = false;
            result.message.push(`${EMPTY_INPUT} - password`);
        } 

        // todo - validations should be improved 

        return result;
    }
}

export default AuthenticationManager;