import Dependencies from "@core-shared/interfaces/dependencies";

interface IRootDependencies extends 
    Dependencies.App, 
    Dependencies.Configuration,
    Dependencies.Controllers,
    Dependencies.DbClients,
    Dependencies.Middlewares,
    Dependencies.Repositories,
    Dependencies.Router,
    Dependencies.Services {}

export default IRootDependencies;