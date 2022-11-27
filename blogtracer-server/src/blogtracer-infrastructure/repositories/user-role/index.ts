import IRepositoryDependencies from "@core-shared/interfaces/dependencies/irepository-dependencies";
import IUserRole from "@core-shared/interfaces/entities/iuser-role";
import IUserRoleRepository from "./interfaces/iuser-role-repository";
import UserRoleModelCtor from "./types/user-role-model-ctor";

class UserRoleRepository implements IUserRoleRepository {
    private readonly _userRoleModel;

    constructor(dependencies: IRepositoryDependencies) {
        const mysqlClient = dependencies.dbClients.mysqlClient;
        this._userRoleModel = mysqlClient.models.user as UserRoleModelCtor;
    }

    public create = (item: IUserRole) => {
        return this._userRoleModel.create(item);
    }
}

export default UserRoleRepository;