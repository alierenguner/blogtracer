import AuthenticationLoginInputDto from "@base/dtos/AuthenticationLoginInputDto";
import AuthenticationRegisterInputDto from "@base/dtos/AuthenticationRegisterInputDto";
import UserFindOutputDto from "@base/dtos/UserFindOutputDto";
import { IRepository } from "@base/shared/global";
import { UserModel } from "@models/user/model";
import { ModelCtor, Sequelize } from "sequelize";
import { IRepositoryDependencies } from "../interfaces";

export interface IAuthenticationRepository extends IRepository {
    login: (input: AuthenticationLoginInputDto) => Promise<AuthenticationLoginOutput>,
    register: (input: AuthenticationRegisterInputDto) => Promise<boolean>
}

type AuthenticationLoginOutput = UserFindOutputDto | null;

class AuthenticationRepository {
    private readonly _model;

    constructor(dependencies: IRepositoryDependencies) {
        const mysqlClient = dependencies.dbClients.mysqlClient as Sequelize;
        this._model = mysqlClient.models.user as ModelCtor<UserModel>;
    }

    public login = async (input: AuthenticationLoginInputDto): Promise<AuthenticationLoginOutput> => {
        let result: AuthenticationLoginOutput = null;

        const user = await this._model.findOne({
            where: Sequelize.and(
                { password: input.password },
                Sequelize.or(
                    { username: input.loginId },
                    { email: input.loginId }
                )
            ),
            raw: true
        });

        if (user) {
            result = {
                id: user.id,
                email: user.email,
                name: user.name,
                profile: user.profile,
                username: user.username
            }
        }

        return result;
    }

    public register = async (input: AuthenticationRegisterInputDto): Promise<boolean> => {
        let result = false;

        await this._model.create(input)
            .then(() => {
                result = true;
            })
            .catch((error) => {
                // error?.original?.code = "ER_DUP_ENTRY"
            });

        return result;
    }
}

export default AuthenticationRepository;