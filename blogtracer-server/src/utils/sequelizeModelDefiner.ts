import { Sequelize, ModelCtor} from "sequelize";

type ModelDefiner = (sequelize: Sequelize) => ModelCtor<any>;

const sequelizeModelDefiner = (sequelize: Sequelize, definers: Array<ModelDefiner>) => {
    definers.forEach((definer) => {
        definer(sequelize);
    })
}

export default sequelizeModelDefiner;