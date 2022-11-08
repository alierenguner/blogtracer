export interface IMiddleware {}
export interface IRouter {
    defineRoutes: () => void
}
export interface IRoutes {}
export interface IController {}
export interface IService {}
export interface IRepository {}

export type Constructor<T = {}> = new (...args: any[]) => T;
