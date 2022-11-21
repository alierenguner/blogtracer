import IPostLike from "@core-shared/interfaces/entities/ipost-like";
import { DataTypes, Sequelize } from "sequelize";
import EntityModel from "../types/entity-model";

const postLikeModel: EntityModel<IPostLike> = {
    name: 'post_like',
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

export default postLikeModel;