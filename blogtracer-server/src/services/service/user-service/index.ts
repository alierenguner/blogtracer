import { IService } from "@base/shared/global";
import { User } from "@models/user/model";
import { IServiceDependencies } from "@services//interfaces";
import { Request, Response } from "express";

class UserService implements IService {
    private _repository;
    
    constructor(dependencies: IServiceDependencies) {
        this._repository = dependencies.repositories.user;
    }
    
    public create = async (request: Request, response: Response) => {
        const user: User = {
            id: undefined,
            name: request.body.name,
            username: request.body.username,
            email: request.body.email,
            password:request.body.password,
            active: undefined,
            create_date: undefined,
            profile: undefined
        } 
        
        const output = await this._repository.create(user);

        response.send(output);
    }

    public update = async (request: Request, response: Response) => {
        const user: User = {
            id: request.params.userId,
            name: request.body.name,
            username: request.body.username,
            password: undefined,
            email: undefined,
            active: undefined,
            create_date: undefined,
            profile: request.body.profile
        }

        const output = await this._repository.update(user);

        response.send(output);
    }

    public delete = async (request: Request, response: Response) => {
        const output = await this._repository.delete(request.params.userId);

        response.send(output);
    }

    /** Description: Gets "findAll" method of "UserService". */
    public findAll = async (request: Request, response: Response) => {
        const output = await this._repository.findAll();

        response.send(output)
    }

    /** Description: Gets "findOne" method of "UserService". */
    public findOne = async (request: Request, response: Response) => {
        const output = await this._repository.findOne(request.params.userId);

        response.send(output)
    }
}

export default UserService;