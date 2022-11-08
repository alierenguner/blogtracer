import appRoutes from '@base/app/config/routes';
import { IRouter } from '@base/shared/global';
import { IRouterDependencies } from './interfaces';
import { Express } from 'express';

class Router implements IRouter {
    private readonly _app: Express;
    private readonly _controllers;

    constructor(dependencies: IRouterDependencies) {
        this._app = dependencies.app;
        this._controllers = dependencies.controllers;
    }

    public defineRoutes = () => {
        try {
            const controllers = this.getControllers();
            const routers: any = {
                'get': this._app.get,
                'post': this._app.post,
                'delete': this._app.delete,
            }
    
            Object.keys(appRoutes).forEach(appRouteKey => {
                const routes = appRoutes[appRouteKey];
    
                routes.forEach((route: any) => {
                    const { callbackMethod, callbackClass, requestMethod, requestUrl } = route;
    
                    const callback = controllers[callbackClass][callbackMethod];
                    
                    if (requestMethod === 'get') {
                        this._app.get(requestUrl, callback)

                    } else if (requestMethod === 'post') {
                        this._app.post(requestUrl, callback)

                    } else if (requestMethod === 'delete') {
                        this._app.delete(requestUrl, callback)
                    }

                });
            })
            
        } catch (error) {
            console.log(error);
            console.log('');
            
        }

    }

    private getControllers = () => {
        const controllers: any = {};
        Object.values(this._controllers).forEach((controller: Object) =>
            controllers[controller.constructor.name] = controller);

        return controllers;
    }
}

export default Router;