import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import AuthMiddleware from "@web-api/middlewares/auth-middleware";
import IMiddlewareDependencies from "@core-shared/interfaces/dependencies/imiddleware-dependencies";
import IMiddlewares from "@common/operator-interfaces/imiddlewares";

class MiddlewareInitiator implements IMiddlewares {
    private readonly _app;
    private readonly _auth;

    constructor(dependencies: IMiddlewareDependencies) {
        // Dependencies
        this._app = dependencies.app;

        // Middlewares
        this._auth = new AuthMiddleware();
        
        // Methods
        this.registerMiddlewares();
    }
    
    /** Description: Registers the application middlewares. */
    private registerMiddlewares = () => {
        this._app.set('trust proxy', true)
        this._app.use(express.urlencoded({ extended: true }));
        this._app.use(bodyParser.json());
        this._app.use(cors());

        // Authorization middleware
        this._app.all('*', this._auth.token);
    }
}

export default MiddlewareInitiator;