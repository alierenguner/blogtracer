import AuthMiddleware from "@web-api/middlewares/auth-middleware";

class MiddlewareInitiator {
    public readonly auth;

    constructor() {
        this.auth = new AuthMiddleware();
    }
}

export default MiddlewareInitiator;