// Controllers
import AuthController from "./controller/auth-controller";
import UserController from "./controller/user-controller";
// Types
import { IControllerDependencies } from "./interfaces";

class Controllers {
    public readonly user;
    public readonly auth;

    constructor(dependencies: IControllerDependencies) {
        this.user = new UserController(dependencies);        
        this.auth = new AuthController(dependencies);        
    }
}

export default Controllers;