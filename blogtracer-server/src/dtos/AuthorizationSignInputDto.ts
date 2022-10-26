import Roles from "@base/shared/roles";

interface IAuthorizationSignInputDto {
    id: string,
    username: string,
    email: string,
    role: Roles,
    ipAddress: string,
}

class AuthorizationSignInputDto implements IAuthorizationSignInputDto {
    public id: string;
    public username: string;
    public email: string;
    public role: Roles;
    public ipAddress: string;

    constructor(data?: IAuthorizationSignInputDto) {
        if (data) {
            this.id = data.id;
            this.username = data.username;
            this.email = data.email;
            this.role = data.role;
            this.ipAddress = data.ipAddress;
        }
    }
}

export default AuthorizationSignInputDto;