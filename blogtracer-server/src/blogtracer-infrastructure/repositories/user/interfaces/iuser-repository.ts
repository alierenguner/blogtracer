import IUser from "@core-shared/interfaces/entities/iuser";
import IRepository from "@core-shared/interfaces/markups/irepository";
import { IDelete, IRead, IUpdate } from "@infrastructure/repositories/_base/interfaces";
import UserModel from "./iuser-model";

interface IUserRepository extends IRepository, IUpdate<IUser>, IDelete, IRead<UserModel> {}
export default IUserRepository;