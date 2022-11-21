import IPostComment from "@core-shared/interfaces/entities/ipost-comment";
import { DataTypes, Sequelize } from "sequelize";
import EntityModel from "../types/entity-model";

const postCommentModel: EntityModel<IPostComment> = {
    name: 'post_comment',
    attributes: {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            allowNull: false,
            primaryKey: true
        },
        post_id: {
            type: DataTypes.UUIDV4,
            allowNull: false
        },
        user_id: {
            type: DataTypes.UUIDV4,
            allowNull: false
        },
        body: {
            type: DataTypes.TEXT,
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
        }
    }
}

export default postCommentModel;