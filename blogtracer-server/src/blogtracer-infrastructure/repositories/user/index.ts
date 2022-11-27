import IRepositoryDependencies from "@core-shared/interfaces/dependencies/irepository-dependencies";
import IUser from "@core-shared/interfaces/entities/iuser";
import IUserRepository from "./interfaces/iuser-repository";
import UserModelCtor from "./types/user-model-ctor";

class UserRepository implements IUserRepository {
    private readonly _userModel;
    
    constructor(dependencies: IRepositoryDependencies) {
        const mysqlClient = dependencies.dbClients.mysqlClient;;
        this._userModel = mysqlClient.models.user as UserModelCtor;
    }

    public update = (item: IUser) => {
        return this._userModel.update(item, { where: { id: item.id } });
    }

    public delete = (id: string) => {
        return this._userModel.update({ active: false }, { where: { id } });
    }

    public findAll = () => {
        return this._userModel.findAll();
    }

    public findOne = (id: string) => {
        return this._userModel.findByPk(id);
    }
}

export default UserRepository;