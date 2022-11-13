import { DataTypes, Sequelize } from "sequelize";
import { RoleModel } from "./model";

const defineRoleModel = (sequelize: Sequelize) => {
    const roleModel = sequelize.define<RoleModel>('role', {
        id: {
            type: DataTypes.UUID,
            allowNull: false,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }, {
        timestamps: true,
        createdAt: false,
        updatedAt: false,
    })

    return roleModel;
    
}

export default defineRoleModel;