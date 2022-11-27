import Exception from "@common/types/exception";

class TokenExpiredException implements Exception {
    public readonly message: string = 'Token is expired.';
    public readonly statusCode: number = 401;
}

export default TokenExpiredException;