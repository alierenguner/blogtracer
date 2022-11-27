import express from 'express';
import type expressTypes from 'express';
import appConfig from './configurations/app-configuration';
import IRootDependencies from '@core-shared/interfaces/dependencies/iroot-dependencies';
import logger from '@common/libs/logger';
// Operator Initiators
import ControllerInitiator from "./operator-initiators/controller-initiator";
import DatabaseInitiator from "./operator-initiators/database-initiator";
import MiddlewareInitiator from "./operator-initiators/middleware-initiator";
import RepositoryInitiator from "./operator-initiators/repository-initiator";
import RouterInitiator from "./operator-initiators/router-initiator";
import ServiceInitiator from "./operator-initiators/service-initiator";

class WebApi {
    private readonly _app: expressTypes.Express = express();

    constructor() {
        this.injectDependencies();
        this.start();
    }

    /** Description: Injects the application dependencies.  */
    private injectDependencies = () => {
        const dependencies: IRootDependencies = {};

        // independent classes
        dependencies.app = this._app, 
        dependencies.dbClients = new DatabaseInitiator(),
        
        // single dependent classes
        dependencies.middlewares = new MiddlewareInitiator(dependencies),
        dependencies.repositories = new RepositoryInitiator(dependencies);

        // multi dependent classes 
        dependencies.services = new ServiceInitiator(dependencies);
        dependencies.controllers = new ControllerInitiator(dependencies);
        dependencies.router = new RouterInitiator(dependencies);
    }

    /** Description: Inits the express application.  */
    private start = () => {
        const { port } = appConfig;

        if (this._app) {
            const listenerCallback = () => {
                logger.success(`[SERVER] The server has been listening on http://localhost:${port}.`)
            }

            this._app.listen(port, listenerCallback);
        }
    }

    /** Description: Returns the application instance.  */
    public getAppInstance = () => {
        return this._app;
    }
}

const webApi = new WebApi();
export default webApi.getAppInstance();