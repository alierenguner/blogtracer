import Dependencies from "@base/shared/dependencies";
import { IAuthenticationRepository } from "./repository/authentication-repository";
import { IUserRepository } from "./repository/user-repository";

export interface IRepositories {
    user: IUserRepository,
    authentication: IAuthenticationRepository,
}

export interface IRepositoryDependencies extends Dependencies.DbClients {}