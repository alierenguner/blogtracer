import express from 'express';
import type expressTypes from 'express';
import appConfig from './configurations/app-configuration';
// Initiators
import ControllerInitiator from "./initiators/controller-initiator";
import DatabaseInitiator from "./initiators/database-initiator";
import MiddlewareInitiator from "./initiators/middleware-initiator";
import RepositoryInitiator from "./initiators/repository-initiator";
import RouterInitiator from "./initiators/router-initiator";
import ServiceInitiator from "./initiators/service-initiator";
import IRootDependencies from '@common/interfaces/iroot-dependencies';

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
        dependencies.config = appConfig,
        dependencies.dbClients = new DatabaseInitiator(),
        dependencies.middlewares = new MiddlewareInitiator(),

        // single dependent classes
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
                console.log('The server has been listening on http://localhost:' + port);
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