import IBaseEntity from "./ibase-entity";

interface IPost extends IBaseEntity {
    user_id: string,
    title: string,
    body: number,
    slug: string,
    create_date: Date,
    update_date: Date | null,
    active: boolean
}

export default IPost;