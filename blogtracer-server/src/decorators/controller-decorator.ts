import appRoutes from "@base/app/config/routes";

/** Description: Defines the class as a controller class. */
const controllerDecorator = (url: string) => (target: Function) => {
    if (appRoutes[target.name]) {
        appRoutes[target.name] = appRoutes[target.name].map((route: any) => ({
            ...route,
            requestUrl: `${url}${route.requestUrl}`
        }))   
    }

}

export default controllerDecorator;