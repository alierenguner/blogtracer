// Write operations
export interface ICreate<T> {
    create: (item: T) => Promise<any> 
}

export interface IUpdate<T> {
    update: (item: T) => Promise<any> 
}

export interface IDelete {
    delete: (id: string) => Promise<any> 
}

export interface IWrite<T> extends ICreate<T>, IUpdate<T>, IDelete {}

// Read operations
export interface IFindAll<T> {
    findAll: () => Promise<T[]> 
}

export interface IFindOne<T> {
    findOne: (id: string) => Promise<T>
} 

export interface IRead<T> extends IFindAll<T>, IFindOne<T> {}