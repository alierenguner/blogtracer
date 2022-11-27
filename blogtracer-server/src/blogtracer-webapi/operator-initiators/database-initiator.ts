import MySQLDatabase from "@persistence/database/sequelize/mysql-db";

class DatabaseInitiator {
    public readonly mysqlClient;

    constructor() {
        this.mysqlClient = MySQLDatabase.getContext();
    }
}

export default DatabaseInitiator;