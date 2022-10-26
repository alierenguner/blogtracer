export interface IResponseInput <T> {
    message?: string | string[],
    data?: T,
    statusCode?: number,
}

export interface IResponseOutput <T> {
    success: boolean,
    message?: string | string[],
    data?: T,
    statusCode?: number,
}

export interface IResponseMessage {
    success: <T> (input: IResponseInput<T>) => void,
    error: <T> (input: IResponseInput<T>) => void
}