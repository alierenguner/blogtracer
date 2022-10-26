import { InferAttributes, InferCreationAttributes, Model } from "sequelize";

export interface User {
    id: string,
    name: string,
    username: string,
    password: string,
    email: string,
    profile: string | null,
    create_date: number,
    active: boolean
}

export interface UserModel extends User, Model<InferAttributes<UserModel>, InferCreationAttributes<UserModel>> {}