import express from "express";
import { Controller, Delete, Get, Post } from "@common/decorators";
import IControllerDependencies from "@core-shared/interfaces/dependencies/icontroller-dependencies";
import IUserController from "./abstract/iuser-controller";

@Controller('/users')
class UserController implements IUserController {
    private readonly _userService;
    
    constructor(dependencies: IControllerDependencies) {
        this._userService = dependencies.services.user;
    }

    @Post('/:userId')
    update(request: express.Request, response: express.Response) {
        
    }

    @Delete('/:userId')
    delete(request: express.Request, response: express.Response) {
        
    }
    
    @Get()
    findAll(request: express.Request, response: express.Response) {

    }

    @Get('/:userId')
    findOne(request: express.Request, response: express.Response) {

    }
}

export default UserController;