import express from 'express';
import dotenv from 'dotenv';
import MySQLDatabase from '@base/database/mysql/context';
import sequelizeModelDefiner from '@base/utils/sequelizeModelDefiner';
import modelDefiners from '@models/modelDefiners';
import { IRootDependencies } from './interfaces';
import { IDbClients } from '@base/database/interfaces';
import Repositories from '@base/repositories';
import Controllers from '@base/controllers';
import Services from '@base/services/';
import Router from '@base/router';
import bodyParser from 'body-parser';
import Middlewares from '@base/middlewares';
import swaggerUi from 'swagger-ui-express';
import swaggerConfig from './config/swagger-config';
import cors from 'cors';

class App {
    private readonly _express: express.Express;
    private _port: number = 3000;
    private _dbClients: IDbClients = {};
    private _dependencies: IRootDependencies;

    constructor() {
        this._express = express();
    }

    /** Description: Initializes the application. */
    public async init() {
        this.config();

        this.databaseInit();
        this.injectDependencies();
        this.middlewareInit();
        this.routerInit();
        
        this.start();
    }


    /** Description: Initializes the database. */
    private databaseInit() {
        const mysqlClient = MySQLDatabase.getContext();
        sequelizeModelDefiner(mysqlClient, Object.values(modelDefiners));

        // mysqlClient.sync({ alter: true });
        this._dbClients.mysqlClient = mysqlClient;
    }

    private middlewareInit() {
        this._express.set('trust proxy', true)

        this._express.use(express.urlencoded({ extended: true }));
        this._express.use(bodyParser.json());
        
        this._express.use(cors());

        this._express.use('/swagger', swaggerUi.serve, swaggerUi.setup(swaggerConfig));
        

        const middlewares = this._dependencies.middlewares;
        this._express.all('*', middlewares.authorization.verify);
    }

    private routerInit() {
        this._dependencies.router.defineRoutes();
    }

    private injectDependencies() {
        const dependencies: IRootDependencies = {
            app: this._express,
            dbClients: this._dbClients,
        }

        // dependent modules
        dependencies.repositories = new Repositories(dependencies);
        dependencies.services = new Services(dependencies);
        dependencies.middlewares = new Middlewares(dependencies);
        dependencies.controllers = new Controllers(dependencies);
        dependencies.router = new Router(dependencies);

        this._dependencies = dependencies;
    }

    /** Description: Sets the application configurations. */
    private config() {
        dotenv.config();
        this._port = parseInt(process.env.PORT);
    }

    /** Description: Starts the application. */
    private start() {
        if (this._express) {
            this._express.listen(this._port, () => {
                console.log('The server has been listening on http://localhost:' + this._port);
            })
        }
    }

    /** Description: Gets the application instance. (Express) */
    public instance() {
        return this._express;
    }
}

const app = new App();
app.init();

export default app.instance();