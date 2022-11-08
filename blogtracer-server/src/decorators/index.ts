// Decorators
import authorizeDecorator from "./authorize-decorator";
import controllerDecorator from "./controller-decorator";
import routeDecorators from "./route-decorator";

// Controller decorator
/** Description: Defines the class as a controller class. */
export const Controller = controllerDecorator;

// Route decorators
/** Description: Http Get Method */
export const Get = routeDecorators.get;
/** Description: Http Post Method */
export const Post = routeDecorators.post;
/** Description: Http Put Method */
export const Put = routeDecorators.put;
/** Description: Http Patch Method */
export const Patch = routeDecorators.patch;
/** Description: Http Delete Method */
export const Delete = routeDecorators.delete;

// Authorize decorator
/** Description: Checks the authorization controls of the method used. */
export const Authorize = authorizeDecorator;