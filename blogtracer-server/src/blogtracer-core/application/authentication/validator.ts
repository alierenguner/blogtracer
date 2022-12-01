import validationHelper from "@common/helpers/validation-helper";
import Exception from "@common/types/exception";
import Validation from "@common/types/validation";
import RequiredFieldException from "@core-shared/global-exceptions/required-field-exception";
import ValidationException from "@core-shared/global-exceptions/validation-exception";
import AuthenticationDtos from "./dtos";
import IAuthenticationValidator from "./interfaces/iauthentication-validator";


class AuthenticationValidator implements IAuthenticationValidator {
    public validateLogin = (input: AuthenticationDtos.ILoginInput) => {
        const { loginId, password } = input;
        
        const messages: string[] = [];
        validationHelper.isEmpty(loginId, () => messages.push(new RequiredFieldException('Login ID').message));
        validationHelper.isEmpty(password, () => messages.push(new RequiredFieldException('Password').message));

        return {
            isValid:!messages.length,
            exception: new ValidationException(messages),
            
        } as Validation;
    }


    public validateRegister = (input: AuthenticationDtos.IRegisterInput) => {
        const { name, email, username, password } = input;

        const messages: string[] = [];
        validationHelper.isEmpty(name, () => messages.push(new RequiredFieldException('Name').message));
        validationHelper.isEmpty(email, () => messages.push(new RequiredFieldException('Email').message));
        validationHelper.isEmpty(username, () => messages.push(new RequiredFieldException('Username').message));
        validationHelper.isEmpty(password, () => messages.push(new RequiredFieldException('Password').message));
        
        return {
            isValid:!messages.length,
            exception: new ValidationException(messages),
            
        } as Validation
    }
}

export default AuthenticationValidator;