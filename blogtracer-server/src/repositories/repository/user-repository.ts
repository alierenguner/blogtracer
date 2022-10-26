import UserFindOutputDto from "@base/dtos/UserFindOutputDto";
import { User, UserModel } from "@models/user/model";
import { ModelCtor, Sequelize } from "sequelize";
import BaseRepository from "../base";
import { IBaseRepository } from "../base/interfaces";
import { IRepositoryDependencies } from "../interfaces";

export interface IUserRepository extends IBaseRepository { }

class UserRepository extends BaseRepository {
    private readonly _model;

    constructor(dependencies: IRepositoryDependencies) {
        super();

        const mysqlClient = dependencies.dbClients.mysqlClient as Sequelize;
        this._model = mysqlClient.models.user as ModelCtor<UserModel>;
    }

    public override create = async (item: User): Promise<boolean> => {
        let result = false;

        const isSuccess = await this._model.create(item);
        if (isSuccess) {
            result = true;
        }

        return result;
    }

    public override update = async (item: UserModel): Promise<boolean> => {
        let result = false;

        const isSuccess = this._model.update(item, { where: { id: item.id } });
        if (isSuccess) {
            result = true;
        }

        return result;
    }

    public override delete = async (id: string): Promise<boolean> => {
        let result = false;

        const isSuccess = this._model.update({ active: false }, { where: { id } });
        console.log(isSuccess); 
        if (isSuccess) {
            result = true;
        }

        return result;
    }

    public override findAll = async (): Promise<UserFindOutputDto[]> => {
        const result: UserFindOutputDto[] = [];
        
        const users = await this._model.findAll({ raw: true });
        users.forEach((user) => {
            const userDto = new UserFindOutputDto({
                id: user.id,
                email: user.email,
                name: user.name,
                profile: user.profile,
                username: user.username
            });

            result.push(userDto);
        })
        
        return result;
    }

    public override findOne = async (id: string): Promise<UserFindOutputDto | null> => {
        let result: UserFindOutputDto | null = null;

        const user = await this._model.findByPk(id, { raw: true });
        if (user) {
            result = new UserFindOutputDto({
                id: user.id,
                email: user.email,
                name: user.name,
                profile: user.profile,
                username: user.username
            });
        }
        
        return result;  
    }
}

export default UserRepository;