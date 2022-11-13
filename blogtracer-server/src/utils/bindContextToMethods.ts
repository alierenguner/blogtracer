const bindContextToMethods = (target: Object) => {
    const methods = Object.getOwnPropertyNames(target.constructor.prototype);

    methods.forEach((method) => {
        if (target.constructor.prototype[method] !== target.constructor) {
            target.constructor.prototype[method] = target.constructor.prototype[method].bind(target); 
        }
    })
}

export default bindContextToMethods;