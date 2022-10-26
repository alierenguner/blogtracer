import type { Express } from 'express';
import { IDbClients } from '@base/database/interfaces';
import { IMiddlewares } from '@base/middlewares/interfaces';
import { IRepositories } from '@base/repositories/interfaces';
import { IControllers } from '@controllers//interfaces';
import { IServices } from '@services//interfaces';
import { IRouter } from './global';

namespace Dependencies {
    /** Description: Injects the app context. */
    export interface App {
        app: Express
    }
    
    /** Description: Injects the reference of db clients. */
    export interface DbClients {
        dbClients: IDbClients
    }
    
    /** Description: Injects the reference of controllers. */
    export interface Controllers {
        controllers?: IControllers
    }

    /** Description: Injects the reference of services. */
    export interface Services {
        services?: IServices
    }

    /** Description: Injects the reference of repositories. */
    export interface Repositories {
        repositories?: IRepositories
    }

    /** Description: Injects the reference of router. */
    export interface Router {
        router?: IRouter
    }

    export interface Middlewares {
        middlewares?: IMiddlewares
    }
}

export default Dependencies;