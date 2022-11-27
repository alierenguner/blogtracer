import type { Express } from 'express';
import IControllers from '@common/operator-interfaces/icontrollers';
import IDbClients from '@common/operator-interfaces/idb-clients';
import IRepositories from '@common/operator-interfaces/irepositories';
import IRouter from '@common/operator-interfaces/irouter';
import IServices from '@common/operator-interfaces/iservices';

namespace Dependencies {
    /** Description: The interface app context. */
    export interface App {
        app?: Express
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
        middlewares?: any
    }
}

export default Dependencies;