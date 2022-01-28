import { IGenericRepository } from "../../core/abstracts/generic-repository-abstracts";
import {} from "typeorm";
import { Housing } from '../../core/entities/housing';

export class HousingPostgresGenericRepository<T> implements IGenericRepository<T>{
    async getAll(): Promise<T[]> {
        throw new Error("Method not implemented.");
    }
    get(id: string): Promise<T> {
        throw new Error("Method not implemented.");
    }
    create(item: T): Promise<T> {


        throw new Error("Method not implemented.");
    }
    update(id: string, item: T): Promise<boolean> {
        throw new Error("Method not implemented.");
    }
    delete(id: string): Promise<boolean> {
        throw new Error("Method not implemented.");
    }
    
}