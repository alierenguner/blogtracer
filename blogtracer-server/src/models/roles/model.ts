import { InferAttributes, InferCreationAttributes, Model } from "sequelize";

export interface Role {
    id: string,
    name: string
}

export interface RoleModel extends Role, Model<InferAttributes<RoleModel>, InferCreationAttributes<RoleModel>> {}