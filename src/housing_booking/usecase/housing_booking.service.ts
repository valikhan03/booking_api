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

    
}