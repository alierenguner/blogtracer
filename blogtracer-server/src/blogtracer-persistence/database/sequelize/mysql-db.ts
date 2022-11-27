import logger from '@common/libs/logger';
import IDbClient from '@core-shared/interfaces/markups/idb-client';
import { Sequelize } from 'sequelize';
import sequelizeModelOptions from './constants/modelOptions';
import sequelizeModels from './models';

class MySQLDatabase {
    private static _context: Sequelize & IDbClient;

    /** Description: Gets the MySQLDb connection context. */
    public static getContext() {
        if (!this._context) {
            this._context = this.createContext();
            this.defineModels();
            this.defineRelationships();
        }

        return this._context;
    }

    /** Description: Creates a MySQLDb connection context. */
    private static createContext() {
        const dbHost = process.env.MYSQL_DB_HOST;
        const dbName = process.env.MYSQL_DB_NAME;
        const dbUser = process.env.MYSQL_DB_USER;
        const dbPassword = process.env.MYSQL_DB_PASSWORD;
 
        const mysqlClient: Sequelize = new Sequelize(dbName, dbUser, dbPassword, {
            host: dbHost,
            logging: true,
            dialect: 'mysql',
        });

        try {
            mysqlClient.authenticate();
            logger.success('[SEQUELIZE:MYSQL] Connection has been established successfully.');

        } catch(error) {
            logger.error('[SEQUELIZE:MYSQL] Unable to connect to the database:');
        }

        return mysqlClient;
    }

    private static defineModels() {
        try {
            Object.values(sequelizeModels).forEach((model) => {
                this._context.define<any>(model.name, model.attributes, sequelizeModelOptions);
            })

            logger.success('[SEQUELIZE:MYSQL] Model definitions have been successfully.');


        } catch(error) {
            logger.error('[SEQUELIZE:MYSQL] Failed to define models.');
        }
    }

    private static defineRelationships() {
        try {
            const models = this._context.models;
    
            // user - user role - role
            models.user.belongsToMany(models.role, { through: models.user_role, foreignKey: 'user_id', as: 'role' });
            models.role.belongsToMany(models.user, { through: models.user_role, foreignKey: 'role_id' });
            models.user_role.belongsTo(models.user, { foreignKey: 'user_id' } );
            models.user_role.belongsTo(models.role, { foreignKey: 'role_id', as: 'role' } );

            logger.success('[SEQUELIZE:MYSQL] Relationship definitions have been successfully.');

        } catch (error) {
            logger.error('[SEQUELIZE:MYSQL] Faild to define relationships.')
        }
    }
}

export default MySQLDatabase;