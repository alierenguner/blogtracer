import IPostComment from "@core-shared/interfaces/entities/ipost-comment";
import BaseEntity from "@domain/seedwork/base-entity";

class PostComment extends BaseEntity implements IPostComment {
    public post_id: string;
    public user_id: string;
    public body: string;
    public create_date: Date
    public update_date: Date | null;
    public active: boolean;
}

export default PostComment;