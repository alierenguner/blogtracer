import { ModelCtor } from "sequelize";
import IUserModel from "../interfaces/iuser-model";

type UserModelCtor = ModelCtor<IUserModel>;
export default UserModelCtor;