import IUserRole from "@core-shared/interfaces/entities/iuser-role";
import { Model } from "sequelize";

type UserRoleModel = Model<IUserRole>;
export default UserRoleModel;