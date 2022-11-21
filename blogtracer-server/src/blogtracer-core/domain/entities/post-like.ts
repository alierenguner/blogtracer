import IPostLike from "@core-shared/interfaces/entities/ipost-like";
import BaseEntity from "@domain/seedwork/base-entity";

class PostLike extends BaseEntity implements IPostLike {
    public post_id: string;
    public user_id: string;
    public create_date: Date
    public update_date: Date | null;
    public active: boolean;
}

export default PostLike;