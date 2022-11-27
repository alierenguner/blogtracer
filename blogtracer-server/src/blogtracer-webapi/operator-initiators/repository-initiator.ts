import IRepositories from "@common/operator-interfaces/irepositories";
// Repository interfaces
import IUserRoleRepository from "@infrastructure/repositories/user-role/interfaces/iuser-role-repository";
import IUserRepository from "@infrastructure/repositories/user/interfaces/iuser-repository";
import IAuthenticationRepository from "@infrastructure/repositories/authentication/interfaces/iauthentication-repository";
// Repositories
import UserRepository from "@infrastructure/repositories/user";
import UserRoleRepository from "@infrastructure/repositories/user-role";
import AuthenticationRepository from "@infrastructure/repositories/authentication";
import IRepositoryDependencies from "@core-shared/interfaces/dependencies/irepository-dependencies";

class RepositoryInitiator implements IRepositories {
    public user: IUserRepository;
    public userRole: IUserRoleRepository;
    public authentication: IAuthenticationRepository;
    
    constructor(dependencies: IRepositoryDependencies) {
        this.user = new UserRepository(dependencies);
        this.userRole = new UserRoleRepository(dependencies);
        this.authentication = new AuthenticationRepository(dependencies);
    }
}

export default RepositoryInitiator;