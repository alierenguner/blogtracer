// Repositories
import { IRepositories, IRepositoryDependencies } from "./interfaces";
import UserRepository from "./repository/user-repository";
import AuthenticationRepository from "./repository/authentication-repository";

class Repositories implements IRepositories {
    public readonly user;
    public readonly authentication;

    constructor(dependencies: IRepositoryDependencies) {
        this.user = new UserRepository(dependencies);
        this.authentication = new AuthenticationRepository(dependencies);
    }
}

export default Repositories;