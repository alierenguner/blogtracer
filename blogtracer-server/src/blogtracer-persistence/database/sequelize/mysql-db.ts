import IDbClient from '@core-shared/interfaces/markups/idb-client';
import { Sequelize } from 'sequelize';

class MySQLDatabase {
    private static _context: Sequelize & IDbClient;

    /** Description: Gets the MySQLDb connection context. */
    public static getContext() {
        if (!MySQLDatabase._context) {
            MySQLDatabase._context = this.createContext();
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
            console.log('Connection has been established successfully.');
        } catch (error) {
            console.error('Unable to connect to the database:');
        }

        return mysqlClient;
    }
}

export default MySQLDatabase;