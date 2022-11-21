import IUser from "@core-shared/interfaces/entities/iuser";
import BaseEntity from "@domain/seedwork/base-entity";

class User extends BaseEntity implements IUser {
    public name: string;
    public username: string;
    public password: string;
    public email: string;
    public profile: string | null;
    public create_date: number;
    public active: boolean;
}

export default User;