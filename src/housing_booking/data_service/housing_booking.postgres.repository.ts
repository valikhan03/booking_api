import { IGenericRepository } from "../../core/abstracts/generic-repository-abstracts";
import {EntityManager} from "typeorm";
import { Housing } from '../../core/entities/housing';

export class HousingPostgresGenericRepository<T> implements IGenericRepository<Housing>{
    constructor(private repository:EntityManager){}
    
    async getAll(location:string): Promise<Housing[]> {
        return await this.repository.query(`select * from housings where location=${location}`);
    }
    async get(id: string): Promise<Housing> {
        return await this.repository.query(`select * from housings where id=${id} limit 1`); 
    }
    async create(item: Housing): Promise<Housing> {
        return this.repository.query(
            `insert into housings (id, title, organization, location, price, description) values $1, $2, $3, $4, $5, $6`, 
            [item.id, item.title, item.organisation, item.location, item.price, item.description]);
    }
    async update(id: string, item: Housing): Promise<Housing> {
        return await this.repository.query(``);
    }
    delete(id: string): Promise<boolean> {
        throw new Error("Method not implemented.");
    }
    
}