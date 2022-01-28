import { HousingBookingService } from "../usecase/housing_booking.service";
import { Application } from "express";
import express from 'express';
import {Request, Response} from "express";
class HousingController{
    constructor(private housingUsecase:HousingBookingService, app:Application){}

    async createHousing(req:Request, res:Response){
        await this.housingUsecase.addHousing(req.body);
    }

    async changeHousing(req:Request, res:Response){
        const id = req.params["id"];
        await this.housingUsecase.changeHousing(id, req.body);
    }

    async getHousing(req:Request, res:Response){
        const id = req.params["id"];
        await this.housingUsecase.getHousingByID(id);
    }
}