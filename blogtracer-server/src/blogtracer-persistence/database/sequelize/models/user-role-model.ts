import IUserRole from "@core-shared/interfaces/entities/iuser-role";
import { DataTypes } from "sequelize";
import EntityModel from "../types/entity-model";

const userRoleModel: EntityModel<IUserRole> = {
    name: 'user_role',
    attributes: {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            allowNull: false,
            primaryKey: true
        },
        user_id: {
            type: DataTypes.UUID,
            references: {
                model: 'users',
                key: 'id'
            },
            allowNull: false
        },
        role_id: {
            type: DataTypes.UUID,
            references: {
                model: 'roles',
                key: 'id'
            },
            allowNull: false  
        }
    }
}

export default userRoleModel;