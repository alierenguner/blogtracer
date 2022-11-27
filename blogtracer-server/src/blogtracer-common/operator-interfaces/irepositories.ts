import IAuthenticationRepository from "@infrastructure/repositories/authentication/interfaces/iauthentication-repository";
import IUserRoleRepository from "@infrastructure/repositories/user-role/interfaces/iuser-role-repository";
import IUserRepository from "@infrastructure/repositories/user/interfaces/iuser-repository";

interface IRepositories {
    user: IUserRepository
    userRole: IUserRoleRepository,
    authentication: IAuthenticationRepository
}

export default IRepositories;