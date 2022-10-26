import { DataTypes, Sequelize } from "sequelize";
import { UserModel } from "./model";

const defineUserModel = (sequelize: Sequelize) => {
    const userModel = sequelize.define<UserModel>('user', {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            allowNull: false,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        create_date: {
            type: "TIMESTAMP",
            defaultValue: sequelize.literal("CURRENT_TIMESTAMP"),
            allowNull: false,
        },
        profile: {
            type: DataTypes.STRING,
            defaultValue: null,
        },
        active: {
            type: DataTypes.BOOLEAN,
            defaultValue: true,
        },
    }, {
        timestamps: true,
        createdAt: false,
        updatedAt: false,
    })

    return userModel;
    
}

export default defineUserModel;