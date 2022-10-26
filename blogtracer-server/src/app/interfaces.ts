import Dependencies from "@base/shared/dependencies";

export interface IRootDependencies extends 
    Dependencies.App,
    Dependencies.DbClients,
    Dependencies.Router,
    Dependencies.Middlewares,
    Dependencies.Controllers,
    Dependencies.Services,
    Dependencies.Repositories {}