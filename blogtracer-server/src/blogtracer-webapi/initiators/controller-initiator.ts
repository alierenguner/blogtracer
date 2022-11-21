import IControllers from "@common/interfaces/icontrollers";
import IAuthController from "@web-api/controllers/abstract/iauth-controller";
import IUserController from "@web-api/controllers/abstract/iuser-controller";
import IControllerDependencies from "@common/interfaces/icontroller-dependencies";
// Controllers
import AuthController from "@web-api/controllers/auth-controller";
import UserController from "@web-api/controllers/user-controller";

class ControllerInitiator implements IControllers {
    public auth: IAuthController;
    public user: IUserController;

    constructor(dependencies: IControllerDependencies) {
        this.auth = new AuthController(dependencies);
        this.user = new UserController(dependencies);
    }
}

export default ControllerInitiator;