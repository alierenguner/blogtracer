// Repositories
import { IRepositories, IRepositoryDependencies } from "./interfaces";
import UserRepository from "./repository/user-repository";
import AuthenticationRepository from "./repository/authentication-repository";
import UserRoleRepository from "./repository/user-role-repository";

class Repositories implements IRepositories {
    public readonly user;
    public readonly authentication;
    public readonly userRole;

    constructor(dependencies: IRepositoryDependencies) {
        this.user = new UserRepository(dependencies);
        this.authentication = new AuthenticationRepository(dependencies);
        this.userRole = new UserRoleRepository(dependencies);
    }
}

export default Repositories;