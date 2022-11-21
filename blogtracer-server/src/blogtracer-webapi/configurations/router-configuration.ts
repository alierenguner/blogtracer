interface MethodRoutes {
    requestUrl: string,
    requestMethod: string,
    callbackMethod: string
}

class RouterConfiguration {
    private _methods: {[key: string]: MethodRoutes[]} = {};

    get methods() {
        return this._methods;
    }

    addMethod(constructorName: string, data: MethodRoutes) {
        if (!this._methods[constructorName]) {
            this._methods[constructorName] = [];
        }

        this._methods[constructorName].push(data);
    }

    addControllerUrl(constructorName: string, url: string) {
        if (this._methods[constructorName]) {
            this._methods[constructorName] = this._methods[constructorName].map((methodRoute) => ({
                ...methodRoute,
                requestUrl: url + methodRoute.requestUrl
            }))
        }
    }
}

const routerConfig = new RouterConfiguration();
export default routerConfig;