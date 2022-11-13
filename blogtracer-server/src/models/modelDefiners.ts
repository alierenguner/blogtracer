// Model Definers
import defineRoleModel from "./roles/definer";
import defineUserModel from "./user/definer";
import defineUserRoleModel from "./user_roles/definer";

const modelDefiners = {
    user: defineUserModel,
    role: defineRoleModel,
    userRole: defineUserRoleModel,
}

export default modelDefiners;