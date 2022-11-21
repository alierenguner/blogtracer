import IBaseEntity from "./ibase-entity";

interface IPostView extends IBaseEntity {
    post_id: string,
    user_id: string,
    create_date: Date
}

export default IPostView;