import { Housing } from '../entities/housing';


export abstract class IGenericRepository<T>{
    abstract getAll(params?:any):Promise<T[]>;
    abstract get(id:string):Promise<T>;
    abstract create(item:any):Promise<T>;
    abstract update(id:string, item:T):Promise<Housing>;
    abstract delete(id:string):Promise<boolean>
}

