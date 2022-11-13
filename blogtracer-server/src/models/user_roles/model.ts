import { InferAttributes, InferCreationAttributes, Model } from "sequelize";

export interface UserRole {
    id: string,
    user_id: string
    role_id: string
}

export interface UserRoleModel extends UserRole, Model<InferAttributes<UserRoleModel>, InferCreationAttributes<UserRoleModel>> {}