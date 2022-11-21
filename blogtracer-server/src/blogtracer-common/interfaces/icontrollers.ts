import IAuthController from "@web-api/controllers/abstract/iauth-controller";
import IUserController from "@web-api/controllers/abstract/iuser-controller";

interface IControllers {
    auth: IAuthController,
    user: IUserController
}

export default IControllers;