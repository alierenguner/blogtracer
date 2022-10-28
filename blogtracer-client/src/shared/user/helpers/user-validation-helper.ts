import constants from "@/shared/global/constants";
import { IValidation } from "@/shared/global/interfaces";
class UserValidationHelper {
    /** Description: Validates the name input. */
    public validateName = (name: string, refResult: IValidation) => {
        if (!name.length) {
            refResult.isValid = false;
            refResult.message.name = constants.EMPTY_FIELD;
        } 

        return refResult;
    }
    
    /** Description: Validates the username input. */
    public validateUsername = (username: string, refResult: IValidation) => {
        if (!username.length) {
            refResult.isValid = false;
            refResult.message.username = constants.EMPTY_FIELD;
        } 

        return refResult;
    }

    /** Description: Validates the mail address input. */
    public validateMailAddress = (mailAddress: string, refResult: IValidation) => {
        if (!mailAddress.length) {
            refResult.isValid = false;
            refResult.message.mailAddress = constants.EMPTY_FIELD;
        } 

        return refResult;
    }

    /** Description: Validates the loginId input. */
    public validateLoginId = (loginId: string, refResult: IValidation) => {
        if (!loginId.length) {
            refResult.isValid = false;
            refResult.message.loginId = constants.EMPTY_FIELD;
        } 

        return refResult;
    }
    
    /** Description: Validates the password input. */
    public validatePassword = (password: string, refResult: IValidation) => {
        if (!password.length) {
            refResult.isValid = false;
            refResult.message.password = constants.EMPTY_FIELD;
        } 

        return refResult;
    }
    
    /** Description: Validates the confirm password input. */
    public validateConfirmPassword = (password: string, confirmPassword: string, refResult: IValidation) => {
        if (!password.length) {
            refResult.isValid = false;
            refResult.message.confirmPassword = constants.EMPTY_PASSWORD_FIELD;

        } else if (password !== confirmPassword) {
            refResult.isValid = false;
            refResult.message.confirmPassword = constants.DIDNT_MATCH_WITH_PASSWORD;
        }
        
        return refResult;
    }
} 

const userValidationHelper = new UserValidationHelper();
export default userValidationHelper;