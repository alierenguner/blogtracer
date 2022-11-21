import IBaseEntity from "./ibase-entity";

interface IPostComment extends IBaseEntity {
    post_id: string,
    user_id: string,
    body: string,
    create_date: Date,
    update_date: Date | null,
    active: boolean
}

export default IPostComment;