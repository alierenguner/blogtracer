import { IController } from "@base/shared/global";
import { IControllerDependencies } from "../interfaces";
import { Request, Response } from "express";
import { Controller, Delete, Get, Post } from "@base/decorators";

export interface IUserController extends IController {
    create: (request: Request, response: Response) => any
    update: (request: Request, response: Response) => any
    delete: (request: Request, response: Response) => any
    findAll: (request: Request, response: Response) => any
    findOne: (request: Request, response: Response) => any
}

@Controller('/users')
class UserController implements IUserController {
    private readonly _service;
    
    constructor(dependencies: IControllerDependencies) {
        this._service = dependencies.services.user;
    }

    @Post('')
    create(request: Request, response: Response) {

    }

    @Post('/:userId')
    update(request: Request, response: Response) {

    }

    @Delete('/:userId')
    delete(request: Request, response: Response) {
        
    }
    
    @Get('')
    findAll(request: Request, response: Response) {

    }

    @Get('/:userId')
    findOne(request: Request, response: Response) {

    }
}

export default UserController; 