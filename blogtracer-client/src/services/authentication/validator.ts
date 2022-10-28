import { ILoginInputDto, IRegisterInputDto } from "@/api/provider";
import IValidation from "@/shared/app/interfaces/validation-interface";
import userValidationHelper from "@/shared/user/helpers/validation-helper";

class AuthenticationValidator {
    public validateLogin = (input: ILoginInputDto) => {
        const result: IValidation = { isValid: true, message: {} };

        userValidationHelper.validateLoginId(input.loginId, result);
        userValidationHelper.validatePassword(input.password, result);

        return result;
    }

    public validateRegister = (input: IRegisterInputDto) => {
        const result: IValidation = { isValid: true, message: {} };

        userValidationHelper.validateName(input.name, result);
        userValidationHelper.validateName(input.username, result);
        userValidationHelper.validateName(input.email, result);
        userValidationHelper.validateName(input.password, result);
        
        return result;
    }
}

export default AuthenticationValidator;