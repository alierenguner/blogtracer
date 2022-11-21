import IPost from "@core-shared/interfaces/entities/ipost";
import { DataTypes, Sequelize } from "sequelize";
import EntityModel from "../types/entity-model";

const postModel: EntityModel<IPost> = {
    name: 'post',
    attributes: {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            allowNull: false,
            primaryKey: true
        },
        user_id: {
            type: DataTypes.UUIDV4,
            allowNull: false
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        body: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        slug: {
            type: DataTypes.STRING,
            allowNull: false
        },
        create_date: {
            type: "TIMESTAMP",
            defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
            allowNull: false,
        },
        update_date: {
            type: "TIMESTAMP",
            defaultValue: Sequelize.literal("CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP"),
            allowNull: false,
        },
        active: {
            type: DataTypes.BOOLEAN,
            defaultValue: true
        },
    }
}

export default postModel;