import { IDataServices } from '../../core/abstracts/data-services-abstraction';
import { Housing } from '../../core/entities/housing';


export class HousingBookingService{
    constructor(private dataServices: IDataServices){}

    async addHousing(housing:Housing){
        try{
            const newHousing = await this.dataServices.housings.create(housing)
        }catch(err){
            throw err
        }        
    }

    async changeHousing(id:string, housing:Housing){
        try{
            const res = await this.dataServices.housings.update(id, housing);
        }catch(err){
            throw err
        }
    }

    async getHousingByID(id:string){
        try{
            const housing = await this.dataServices.housings.get(id);
        }catch(err){

        }
    }

    async getAllHousings(){
        try{
            const housings = await this.dataServices.housings.getAll()
        }catch(err){

        }
    }
}