import { Housing } from "../entities/housing";
import { User } from "../entities/user";
import { IGenericRepository } from "./generic-repository-abstracts";

export abstract class IDataServices{
    abstract housings:IGenericRepository<Housing>;

    abstract users:IGenericRepository<User>;
}