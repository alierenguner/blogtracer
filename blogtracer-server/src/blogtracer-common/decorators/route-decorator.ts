import routerConfig from "@web-api/configurations/router-configuration";

class RouteDecorators {
    /** Description: Creates the route decorators. */
    private decoratorFactory = (requestMethod: string) => (methodUrl?: string) => (target: any, propertyName: string, descriptor: PropertyDescriptor) => {
        const requestUrl = methodUrl !== undefined? methodUrl : `/${propertyName}`; 
        const constructorName = target.constructor.name;
        
        routerConfig.addMethod(constructorName, {
            callbackMethod: propertyName,
            requestMethod,
            requestUrl
        })
        
        return descriptor;
    }

    /** Description: Http Get Method */
    public get = <any>this.decoratorFactory('get');
    
    /** Description: Http Post Method */
    public post = <any>this.decoratorFactory('post');
    
    /** Description: Http Put Method */
    public put = <any>this.decoratorFactory('put');
    
    /** Description: Http Patch Method */
    public patch = <any>this.decoratorFactory('patch');
    
    /** Description: Http Delete Method */
    public delete = <any>this.decoratorFactory('delete');
}

const routeDecorators = new RouteDecorators();
export default routeDecorators;
