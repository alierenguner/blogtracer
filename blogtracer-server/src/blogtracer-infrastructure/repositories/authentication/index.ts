import { IAuthenticationLoginInputDto } from "@application/authentication/interfaces/i-login-dtos";
import { IAuthenticationRegisterInputDto } from "@application/authentication/interfaces/i-register-dtos";
import IRepositoryDependencies from "@core-shared/interfaces/dependencies/irepository-dependencies";
import { Sequelize } from "sequelize";
import UserModelCtor from "../user/types/user-model-ctor";
import IAuthenticationRepository from "./interfaces/iauthentication-repository";

class AuthenticationRepository implements IAuthenticationRepository {
    private readonly _userModel;

    constructor(dependencies: IRepositoryDependencies) {
        const mysqlClient = dependencies.dbClients.mysqlClient;
        this._userModel = mysqlClient.models.user as UserModelCtor;
    }

    public login = async (input: IAuthenticationLoginInputDto) => {
        return this._userModel.findOne({
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
        }) as any;
    }

    public register = (input: IAuthenticationRegisterInputDto) => {
        return this._userModel.create({ 
            name: input.name,
            email: input.email,
            username: input.username,
            password: input.password
        },
        {
            raw: true
        })
    }
}

export default AuthenticationRepository;