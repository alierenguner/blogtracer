import express from "express";
import routerConfig from "@web-api/configurations/router-configuration";
import IRouterDependencies from "@core-shared/interfaces/dependencies/irouter-dependencies";
import IRouter from "@common/operator-interfaces/irouter";

class RouterInitiator implements IRouter {
    private readonly _app;
    private readonly _controllers;

    constructor(dependencies: IRouterDependencies) {
        this._app = dependencies.app;
        this._controllers = dependencies.controllers;   
        
        this.registerHandlers();
    }

    /** Description: Defines the controller methods in the router config. */
    private registerHandlers() {
        const controllers = this.getControllers();
        const methods = routerConfig.methods;

        Object.keys(methods).forEach((constructorName) => {
            methods[constructorName].forEach((method) => {
                const { callbackMethod, requestMethod, requestUrl } = method; 

                const controller = controllers[constructorName];
                const controllerPrototypes = controller.constructor.prototype; 
                const handler = controllerPrototypes[callbackMethod]?.bind(controller);
                
                this._app[requestMethod as keyof express.Express](requestUrl, handler);
            })
        })
    }

    /** Description: Returns the controllers with their constructor names. */
    private getControllers = () => {
        const controllers: {[key: string]: Object} = {};

        Object.values(this._controllers).forEach((controller: Object) => {
            const constructorName = controller.constructor.name; 
            controllers[constructorName] = controller;
        })

        return controllers;
    }
}

export default RouterInitiator;