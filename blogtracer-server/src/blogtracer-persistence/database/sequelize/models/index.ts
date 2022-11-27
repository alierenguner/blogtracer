// Sequelize Models
import postCommentModel from "./post-comment-model";
import postLikeModel from "./post-like-model";
import postModel from "./post-model";
import postViewModel from "./post-view-model";
import roleModel from "./role-model";
import userModel from "./user-model";
import userRoleModel from "./user-role-model";
import userSaveModel from "./user-save-model";

const sequelizeModels = {
    postComment: postCommentModel,
    postLike: postLikeModel,
    post: postModel,
    postView: postViewModel,
    role: roleModel,
    user: userModel,
    userRole: userRoleModel,
    userSave: userSaveModel
}

export default sequelizeModels;