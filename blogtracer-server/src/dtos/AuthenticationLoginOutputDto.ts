import Roles from "@base/shared/roles";

interface IAuthenticationLoginOutputDto {
    id: string,
    name: string,
    username: string,
    email: string,
    accessToken: string,
    role: Roles
}

class AuthenticationLoginOutputDto implements IAuthenticationLoginOutputDto {
    public id: string;
    public name: string;
    public username: string;
    public email: string;
    public accessToken: string;
    public role: Roles;

    constructor(data?: IAuthenticationLoginOutputDto) {
        if (data) {
            this.id = data.id;
            this.name = data.name;
            this.username = data.username;
            this.email = data.email;
            this.accessToken = data.accessToken;
            this.role = data.role;
        }
    }
}

export default AuthenticationLoginOutputDto;