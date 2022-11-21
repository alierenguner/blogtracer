import IPostView from "@core-shared/interfaces/entities/ipost-view";
import { DataTypes, Sequelize } from "sequelize";
import EntityModel from "../types/entity-model";

const postViewModel: EntityModel<IPostView> = {
    name: 'post_view',
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
    }
}

export default postViewModel;