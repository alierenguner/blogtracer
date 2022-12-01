import Exception from "@common/types/exception";
import stringFormat from "@common/utils/string-format";

class NotFoundException implements Exception {
    public readonly name: string = 'NotFoundError';
    public readonly message: string = '{0} is not found.';
    public readonly statusCode: number = 404;

    constructor(value: string) {
        if (value) {
            this.message = stringFormat(this.message, [value]); 
        }
    }
}

export default NotFoundException;