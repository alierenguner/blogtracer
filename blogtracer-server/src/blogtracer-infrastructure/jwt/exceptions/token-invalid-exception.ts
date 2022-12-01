import Exception from "@common/types/exception";

class TokenInvalidException implements Exception {
    public readonly name: string = 'InvalidTokenError';
    public readonly message: string = 'Token is invalid.';
    public readonly statusCode: number = 401;
}

export default TokenInvalidException;