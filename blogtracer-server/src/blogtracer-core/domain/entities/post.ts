import IPost from "@core-shared/interfaces/entities/ipost";
import BaseEntity from "@domain/seedwork/base-entity";

class Post extends BaseEntity implements IPost {
    public user_id: string;
    public title: string;
    public body: number;
    public slug: string;
    public create_date: Date;
    public update_date: Date | null;
    public active: boolean;
}

export default Post;