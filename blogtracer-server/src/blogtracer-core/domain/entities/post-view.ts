import IPostView from "@core-shared/interfaces/entities/ipost-view";
import BaseEntity from "@domain/seedwork/base-entity";

class PostView extends BaseEntity implements IPostView {
    public post_id: string;
    public user_id: string;
    public create_date: Date;
}

export default PostView;