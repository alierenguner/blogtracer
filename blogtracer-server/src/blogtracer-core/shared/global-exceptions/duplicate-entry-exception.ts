import Exception from "@common/types/exception";
import stringFormat from "@common/utils/string-format";

class DuplicateEntryException implements Exception {
    public readonly name: string = 'DuplicateEntryException';
    public readonly message: string = "{0} named '{1}' already exists.";
    public readonly statusCode: number = 200;

    constructor(columnName: string, value: string) {
        this.message = stringFormat(this.message, [columnName, value]); 
    }
}

export default DuplicateEntryException;