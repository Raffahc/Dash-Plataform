import { Application } from "express";

import { Mongoose } from "./config/mongoose/mongoose"; 

export class DataBase {
    constructor(private server: Application) {
        this.database = new Mongoose(this.server);
    }

    public database: Mongoose;
}