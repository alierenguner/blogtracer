/** Description: Checks the authorization controls of the method used. */
const authorizeDecorator = (target: Object, propertyName: string, descriptor: PropertyDescriptor) => {
    console.log(propertyName, 'TEST');
    
}

export default authorizeDecorator;