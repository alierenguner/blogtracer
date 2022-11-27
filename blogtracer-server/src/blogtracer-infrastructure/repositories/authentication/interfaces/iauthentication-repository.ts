import AuthenticationDtos from "@application/authentication/dtos";
import IUser from "@core-shared/interfaces/entities/iuser";
import IRepository from "@core-shared/interfaces/markups/irepository";

interface IAuthenticationRepository extends IRepository {
    login: (input: AuthenticationDtos.ILoginInput) => Promise<AuthenticationDtos.ILoginOutput>,
    register: (input: AuthenticationDtos.IRegisterInput) => Promise<IUser>
}
export default IAuthenticationRepository;