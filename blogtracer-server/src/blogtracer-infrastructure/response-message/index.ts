import { Response } from "express";
import { IResponseInput, IResponseMessage, IResponseOutput } from "./interfaces";

class ResponseMessage implements IResponseMessage {
    private readonly _response;

    constructor(response: Response) {
        this._response = response;
    }

    public success = <T> (input: IResponseInput<T>) => {
        const statusCode = input.statusCode || 200;
        const result: IResponseOutput<T> = {
            ...input,
            success: true,
            statusCode: undefined,
        } 

        this._response.status(statusCode).send(result);
    }

    public error = <T> (input: IResponseInput<T>) => {
        const statusCode = input.statusCode || 200;
        const result: IResponseOutput<T> = {
            ...input,
            success: false,
            statusCode: undefined
        } 

        this._response.status(statusCode).send(result);
    }
}

export default ResponseMessage;