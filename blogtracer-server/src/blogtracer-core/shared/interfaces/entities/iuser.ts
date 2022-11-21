import IBaseEntity from "./ibase-entity";

interface IUser extends IBaseEntity {
    name: string,
    username: string,
    password: string,
    email: string,
    profile: string | null,
    create_date: number,
    active: boolean  
}

export default IUser;