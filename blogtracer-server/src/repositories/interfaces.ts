import Dependencies from "@base/shared/dependencies";
import { IAuthenticationRepository } from "./repository/authentication-repository";
import { IUserRepository } from "./repository/user-repository";
import { IUserRoleRepository } from "./repository/user-role-repository";

export interface IRepositories {
    user: IUserRepository,
    authentication: IAuthenticationRepository,
    userRole: IUserRoleRepository,
}

export interface IRepositoryDependencies extends Dependencies.DbClients {}