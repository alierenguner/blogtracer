
import { IRoutes } from "@base/shared/global";
import { IRouterDependencies } from "../interfaces";

class MainRoutes implements IRoutes {
    private readonly _app;
    private readonly _controller;

    constructor(dependencies: IRouterDependencies) {
        this._app = dependencies.app;
        this._controller = dependencies.controllers.user;

        this.defineRoutes();
    }

    private defineRoutes() {
        // Create
        this._app.get('/', (req, res) => res.send({ message: 'Hello! Welcome to Blogtracer Web API. '}))
    }
}

export default MainRoutes;