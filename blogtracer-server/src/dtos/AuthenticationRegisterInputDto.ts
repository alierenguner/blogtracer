interface IAuthenticationRegisterInputDto {
    name: string,
    username: string,
    email: string,
    password: string,
}

class AuthenticationRegisterInputDto implements IAuthenticationRegisterInputDto {
    public name: string;
    public username: string;
    public email: string;
    public password: string;

    constructor(data?: IAuthenticationRegisterInputDto) {
        if (data) {
            this.name = data.name;
            this.username = data.username;
            this.email = data.email;
            this.password = data.password;
        }
    }
}

export default AuthenticationRegisterInputDto;