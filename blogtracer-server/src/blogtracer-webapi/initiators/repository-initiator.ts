import IRepositories from "@common/interfaces/irepositories";
import IRepositoryDependencies from "@common/interfaces/irepository-dependencies";
import UserRepository from "@persistence/repositories/user";
import IUserRepository from "@persistence/repositories/user/interfaces/iuser-repository";

class RepositoryInitiator implements IRepositories {
    public user: IUserRepository;
    
    constructor(dependencies: IRepositoryDependencies) {
        this.user = new UserRepository(dependencies);
    }
}

export default RepositoryInitiator;