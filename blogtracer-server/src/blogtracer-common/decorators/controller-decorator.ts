import routerConfig from "@web-api/configurations/router-configuration";

/** Description: Defines the class as a controller class. */
const controllerDecorator = (url: string) => (target: Function) => {
    const constructorName = target.name;
    routerConfig.addControllerUrl(constructorName, url);
}

export default controllerDecorator;