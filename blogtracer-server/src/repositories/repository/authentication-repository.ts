import AuthenticationLoginInputDto from "@base/dtos/AuthenticationLoginInputDto";
import AuthenticationRegisterInputDto from "@base/dtos/AuthenticationRegisterInputDto";
import UserFindOutputDto from "@base/dtos/UserFindOutputDto";
import { IRepository } from "@base/shared/global";
import { RoleModel } from "@models/roles/model";
import { UserModel } from "@models/user/model";
import { UserRoleModel } from "@models/user_roles/model";
import { ModelCtor, Sequelize } from "sequelize";
import { IRepositoryDependencies } from "../interfaces";

export interface IAuthenticationRepository extends IRepository {
    login: (input: AuthenticationLoginInputDto) => Promise<AuthenticationLoginOutput>,
    register: (input: AuthenticationRegisterInputDto) => Promise<any>
}

type AuthenticationLoginOutput = any | null;

class AuthenticationRepository {
    private readonly _model;

    constructor(dependencies: IRepositoryDependencies) {
        const mysqlClient = dependencies.dbClients.mysqlClient as Sequelize;
        this._model = mysqlClient.models.user as ModelCtor<UserModel>;
    }

    public login = async (input: AuthenticationLoginInputDto): Promise<AuthenticationLoginOutput> => {
        return this._model.findOne({
            where: Sequelize.and(
                { password: input.password },
                Sequelize.or(
                    { username: input.loginId },
                    { email: input.loginId }
                ),
            ),
            include: [{
                association: 'role',
                through: {
                    attributes: []
                }
            }],
            raw: true,
            nest: true,
        });
    }

    public register = async (input: AuthenticationRegisterInputDto): Promise<any> => {
        return this._model.create(input);
    }
}

export default AuthenticationRepository;