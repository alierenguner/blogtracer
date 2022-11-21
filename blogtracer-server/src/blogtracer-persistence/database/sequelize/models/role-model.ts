import IRole from "@core-shared/interfaces/entities/irole";
import { DataTypes } from "sequelize";
import EntityModel from "../types/entity-model";

const roleModel: EntityModel<IRole> = {
    name: 'role',
    attributes: {
        id: {
            type: DataTypes.UUID,
            allowNull: false,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }
}

export default roleModel;