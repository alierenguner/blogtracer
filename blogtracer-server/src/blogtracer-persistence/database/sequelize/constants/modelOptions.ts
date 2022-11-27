import { ModelOptions } from "sequelize";

const sequelizeModelOptions: ModelOptions = {
    timestamps: true,
    createdAt: false,
    updatedAt: false
}

export default sequelizeModelOptions;