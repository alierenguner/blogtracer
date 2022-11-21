import IUser from "@core-shared/interfaces/entities/iuser";
import { DataTypes, Sequelize } from "sequelize";
import EntityModel from "../types/entity-model";

const userModel: EntityModel<IUser> = {
    name: 'user',
    attributes: {
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
            defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
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
    }
}

export default userModel;