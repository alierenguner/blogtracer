interface IAuthenticationLoginInputDto {
    loginId: string,
    password: string
}

class AuthenticationLoginInputDto implements IAuthenticationLoginInputDto {
    public loginId: string;
    public password: string;

    constructor(data?: IAuthenticationLoginInputDto) {
        if (data) {
            this.loginId = data.loginId;
            this.password = data.password;
        }
    }
}

export default AuthenticationLoginInputDto;