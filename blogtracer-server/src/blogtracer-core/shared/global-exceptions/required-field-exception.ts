import Exception from "@common/types/exception";
import stringFormat from "@common/utils/string-format";

class RequiredFieldException implements Exception {
    public readonly name: string = 'RequiredFieldError';
    public readonly message: string = '{0} field is required.';
    public readonly statusCode: number = 400;

    constructor(value: string) {
        if (value) {
            this.message = stringFormat(this.message, [value]); 
        }
    }
}

export default RequiredFieldException;