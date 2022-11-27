/** Description: Creates a data transfer object class. */
const createDto = <T = any>() => {
    class Dto {
        constructor(data?: T) {
            if (data) {
                Object.keys(data).forEach(propKey => {
                    (this as any)[propKey] = data[propKey as keyof T]; 
                });
            }
        }
    }

    return Dto as { new(data?: T): T };
}

export default createDto;