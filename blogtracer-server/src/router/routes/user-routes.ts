import { IRoutes } from "@base/shared/global";
import { IRouterDependencies } from "../interfaces";

class UserRoutes implements IRoutes {
    private readonly _app;
    private readonly _controller;

    constructor(dependencies: IRouterDependencies) {
        this._app = dependencies.app;
        this._controller = dependencies.controllers.user;

        this.defineRoutes();
    }

    private defineRoutes() {
        this._app.post('/users', this._controller.create);
        this._app.post('/users/:userId', this._controller.update);
        this._app.delete('/users/:userId', this._controller.delete);
        this._app.get('/users', this._controller.findAll);
        this._app.get('/users/:userId', this._controller.findOne);
    }
}

export default UserRoutes;