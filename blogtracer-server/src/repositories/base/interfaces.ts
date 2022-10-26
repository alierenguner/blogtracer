/** Description: Base Repository Writable Interface. */
export interface IWrite {
    create(item: any): Promise<boolean>;
    update(item: any): Promise<boolean>;
    delete(id: string): Promise<boolean>;
}

/** Description: Base Repository Readable Interface. */
export interface IRead {
    findAll(): Promise<any[]>;
    findOne(id: string): Promise<any>;
}

export interface IBaseRepository extends IWrite, IRead {}