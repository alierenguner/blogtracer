import { IRouter } from '@base/shared/global';
import { IRouterDependencies } from './interfaces';
// Routes
import AuthRoutes from './routes/auth-routes';
import UserRoutes from './routes/user-routes';

class Router implements IRouter {
    private readonly _dependencies;
    
    constructor(dependencies: IRouterDependencies) {
        this._dependencies = dependencies;
    }

    public defineRoutes = () => {
        new UserRoutes(this._dependencies);
        new AuthRoutes(this._dependencies);
    }
}

export default Router;