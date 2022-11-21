import type { Express } from 'express';
import IConfiguration from './iconfiguration';
import IControllers from './icontrollers';
import IDbClients from './idb-clients';
import IMiddlewares from './imiddlewares';
import IRepositories from './irepositories';
import IRouter from './irouter';
import IServices from './iservices';

namespace Dependencies {
    /** Description: The interface app context. */
    export interface App {
        app?: Express
    }

    /** Description: The interface of root configuration. */
    export interface Configuration {
        config?: IConfiguration
    }
    
    /** Description: The interface of db clients. */
    export interface DbClients {
        dbClients?: IDbClients
    }
    
    /** Description: The interface of controllers. */
    export interface Controllers {
        controllers?: IControllers
    }

    /** Description: The interface of services. */
    export interface Services {
        services?: IServices
    }

    /** Description: The interface of repositories. */
    export interface Repositories {
        repositories?: IRepositories
    }

    /** Description: The interface of router. */
    export interface Router {
        router?: IRouter
    }

    /** Description: The interface of middlewares. */
    export interface Middlewares {
        middlewares?: IMiddlewares
    }
}

export default Dependencies;