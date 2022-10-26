interface ITokenPayloadDto {
    id: string,
    username: string,
    ipAddress: string,
    role: string
}

class TokenPayloadDto implements ITokenPayloadDto {
    public id: string;
    public username: string;
    public ipAddress: string;
    public role: string;

    constructor(data?: ITokenPayloadDto) {
        if (data) {
            this.id = data.id;
            this.username = data.username;
            this.ipAddress = data.ipAddress;
            this.role = data.role;
        }
    }
}

export default TokenPayloadDto;