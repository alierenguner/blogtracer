import { DataTypes, Sequelize } from "sequelize";
import { UserRoleModel } from "./model";

const defineUserRoleModel = (sequelize: Sequelize) => {
    const userRoleModel = sequelize.define<UserRoleModel>('user_role', {
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
    }, {
        timestamps: true,
        createdAt: false,
        updatedAt: false,
    })

    return userRoleModel;
    
}

export default defineUserRoleModel;