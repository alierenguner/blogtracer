const createDto = <T = any>() => {
    class Dto {
        constructor(data?: T) {
            if (data) {
                Object.keys(data).forEach(propKey => {
                    (this as any)[propKey as keyof T] = (data as any)[propKey]; 
                });
            }
        }
    }

    return Dto as { new(data?: T): T };
}

export default createDto;