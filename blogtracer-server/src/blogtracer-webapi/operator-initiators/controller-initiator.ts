import IControllers from "@common/operator-interfaces/icontrollers";
import IAuthController from "@web-api/controllers/abstract/iauth-controller";
import IUserController from "@web-api/controllers/abstract/iuser-controller";
import IControllerDependencies from "@core-shared/interfaces/dependencies/icontroller-dependencies";
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