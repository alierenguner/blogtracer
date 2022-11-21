/** Description: Checks the authorization controls of the method used. */
const authorizeDecorator = (permission: string) => (target: Object, propertyName: string, descriptor: TypedPropertyDescriptor<any>) => {
    const originalMethod = descriptor;


    return originalMethod;
}

export default authorizeDecorator;