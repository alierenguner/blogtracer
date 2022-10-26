import { IRepository } from "@base/shared/global";
import { IBaseRepository } from "./interfaces";

abstract class BaseRepository implements IBaseRepository {
    public create(item: any): Promise<boolean> {
        throw new Error("Method not implemented.");
    }
    
    public update(item: any): Promise<boolean> {
        throw new Error("Method not implemented.");
    }
    
    public delete(id: string): Promise<boolean> {
        throw new Error("Method not implemented.");
    }

    public findAll(): Promise<any[]> {
        throw new Error("Method not implemented.");
    }
    
    public findOne(id: string): Promise<any> {
        throw new Error("Method not implemented.");
    }
}

export default BaseRepository;