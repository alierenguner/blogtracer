import IDbClient from "@core-shared/interfaces/markups/idb-client";
import { Sequelize } from "sequelize";

interface IDbClients {
    mysqlClient: Sequelize & IDbClient
}

export default IDbClients;