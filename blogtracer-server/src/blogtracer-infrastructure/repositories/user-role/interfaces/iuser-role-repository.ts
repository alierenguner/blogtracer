import IUserRole from "@core-shared/interfaces/entities/iuser-role";
import IRepository from "@core-shared/interfaces/markups/irepository";
import { ICreate } from "@infrastructure/repositories/_base/interfaces";

interface IUserRoleRepository extends IRepository, ICreate<IUserRole> {}
export default IUserRoleRepository;