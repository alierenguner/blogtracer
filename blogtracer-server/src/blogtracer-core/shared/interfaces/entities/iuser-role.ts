import IBaseEntity from "./ibase-entity";

interface IUserRole extends IBaseEntity {
    user_id: string,
    role_id: string
}

export default IUserRole;