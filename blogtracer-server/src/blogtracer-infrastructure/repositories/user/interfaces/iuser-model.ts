import IUser from "@core-shared/interfaces/entities/iuser";
import { Model, InferAttributes, InferCreationAttributes } from "sequelize";

interface IUserModel extends IUser, Model<InferAttributes<IUserModel>, InferCreationAttributes<IUserModel>> {}
export default IUserModel;