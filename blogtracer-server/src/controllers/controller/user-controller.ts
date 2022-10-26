import { IController } from "@base/shared/global";
import { IControllerDependencies } from "../interfaces";
import { Request, Response } from "express";

export interface IUserController extends IController {
    create: (req: Request, res: Response) => any
    update: (req: Request, res: Response) => any
    delete: (req: Request, res: Response) => any
    findAll: (req: Request, res: Response) => any
    findOne: (req: Request, res: Response) => any
}

class UserController implements IUserController {
    // Methods
    public readonly create;
    public readonly update;
    public readonly delete;
    public readonly findAll;
    public readonly findOne;
    
    constructor(dependencies: IControllerDependencies) {
        const service = dependencies.services.user;

        this.create = service.create; 
        this.update = service.update; 
        this.delete = service.delete; 
        this.findAll = service.findAll; 
        this.findOne = service.findOne; 
    }
}

export default UserController; 