import { IUserRoleCreateInputDto } from "@base/dtos/UserRoleDtos";
import { IRepository } from "@base/shared/global";
import { UserRole, UserRoleModel } from "@models/user_roles/model";
import { ModelCtor, Sequelize } from "sequelize";
import { IBaseRepository } from "../base/interfaces";
import { IRepositoryDependencies } from "../interfaces";

export interface IUserRoleRepository extends IRepository {
    create: (input: IUserRoleCreateInputDto) => Promise<any>,
}

class UserRoleRepository implements IUserRoleRepository {
    private readonly _model;

    constructor(dependencies: IRepositoryDependencies) {
        const mysqlClient = dependencies.dbClients.mysqlClient as Sequelize;
        this._model = mysqlClient.models.user_role as ModelCtor<UserRoleModel>;
    }
    
    public create = async (item: IUserRoleCreateInputDto) => {
        return  this._model.create(item);
    }
}

export default UserRoleRepository;