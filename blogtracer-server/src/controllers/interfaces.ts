import Dependencies from "@base/shared/dependencies";
import { IAuthController } from "./controller/auth-controller";
import { IUserController } from "./controller/user-controller";

export interface IControllers {
    user: IUserController,
    auth: IAuthController,
}

export interface IControllerDependencies extends Dependencies.Services {}