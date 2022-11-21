import IBaseEntity from "./ibase-entity";

interface IPostLike extends IBaseEntity {
    post_id: string,
    user_id: string,
    create_date: Date,
    update_date: Date | null,
    active: boolean
}

export default IPostLike;