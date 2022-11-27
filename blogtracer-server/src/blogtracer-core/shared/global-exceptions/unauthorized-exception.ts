import Exception from "@common/types/exception";

class UnauthorizedException implements Exception {
    public readonly message: string = 'Unauthorized access attempt.';
    public readonly statusCode: number = 401;
}

export default UnauthorizedException;