import IServiceDependencies from "@core-shared/interfaces/dependencies/iservice-dependencies";
import IUserService from "./interfaces/iuser-service";
import UserValidator from "./validator";

class UserService implements IUserService {
    private readonly _validator;
    
    constructor(dependencies: IServiceDependencies) {
        this._validator = new UserValidator();
    }

}

export default UserService;