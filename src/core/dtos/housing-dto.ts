import { IsString, IsNotEmpty } from "class-validator";
import { Housing } from '../entities/housing';


export class createHousingDTO{
    @IsString()
    @IsNotEmpty()
    title: string;
    
    @IsString()
    @IsNotEmpty()
    organisation:string;

    @IsNotEmpty()
    location:string;

    @IsNotEmpty()
    price:number;

    @IsNotEmpty()
    description:string;
}

export class createHousingResponseDTO{
    success!:boolean;
    housing!:Housing;
}

