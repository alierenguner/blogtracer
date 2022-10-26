import { IRoutes } from "@base/shared/global";
import { IRouterDependencies } from "../interfaces";

class AuthRoutes implements IRoutes {
    private readonly _app;
    private readonly _controller;

    constructor(dependencies: IRouterDependencies) {
        this._app = dependencies.app;
        this._controller = dependencies.controllers.auth;

        this.defineRoutes();
    }

    private defineRoutes() {
        this._app.post('/auth/token', this._controller.token);
        this._app.post('/auth/login', this._controller.login);
        this._app.post('/auth/register', this._controller.register);
    }
}

export default AuthRoutes;