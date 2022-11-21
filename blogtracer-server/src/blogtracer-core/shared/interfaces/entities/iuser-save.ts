import IBaseEntity from "./ibase-entity";

interface IUserSave extends IBaseEntity {
    post_id: number,
    user_id: number,
    create_date: Date,
    update_date: Date | null,
    active: boolean
}

export default IUserSave;