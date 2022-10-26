interface IUserFindOutputDto {
    id: string;
    name: string;
    username: string;
    email: string;
    profile: string;
}

class UserFindOutputDto implements IUserFindOutputDto {
    public id: string;
    public name: string;
    public username: string;
    public email: string;
    public profile: string;

    constructor(data?: IUserFindOutputDto) {
        if (data) {
            this.id = data.id;
            this.name = data.name;
            this.username = data.username;
            this.email = data.email;
            this.profile = data.profile;
        }
    }
}

export default UserFindOutputDto;