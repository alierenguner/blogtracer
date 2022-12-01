import NotFoundException from "@core-shared/global-exceptions/not-found-exception";
import ResponseMessage from "@infrastructure/response-message";
import routerConfig from "@web-api/configurations/router-configuration";
import e from "express";

class RouteDecorators {
    /** Description: Creates the route decorators. */
    private decoratorFactory = (requestMethod: string) => (methodUrl?: string) => (target: Object, propertyName: string, descriptor: PropertyDescriptor) => {
        const requestUrl = methodUrl !== undefined? methodUrl : `/${propertyName}`; 
        const constructorName = target.constructor.name;
        
        // add to the routing
        routerConfig.addMethod(constructorName, {
            callbackMethod: propertyName,
            requestMethod,
            requestUrl
        })

        descriptor.value = new Proxy(descriptor.value, {
            apply(target, thisArg, argArray) {
                // response message & handle exceptions
                const [_, response] = argArray as [e.Request, e.Response];

                return (async () => {
                    const responseMessage = new ResponseMessage(response);
                    
                    console.log('TEST 2');
                    try {
                        const result = await target.apply(thisArg, argArray);
                        responseMessage.success({ data: result });

                        return result;

                    } catch (error) {
                        responseMessage.error({ message: error.message, statusCode: error.statusCode });
                    }

                })()
            },  
        });
        
        
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
