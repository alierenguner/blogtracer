import Exception from "@common/types/exception";

class AuthenticationFailedException implements Exception {
    public readonly name: string = 'AuthenticationFailedError';
    public readonly message: string = 'Wrong email and/or password.';
    public readonly statusCode: number = 200;
}

export default AuthenticationFailedException;