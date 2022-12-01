import Exception from "@common/types/exception";

class ValidationException implements Exception {
    public readonly name: string = 'ValidationError';
    public readonly message: string[] = [];
    public readonly statusCode: number = 400;

    constructor(values: string[]) {
        this.message = values;
    }
}

export default ValidationException;