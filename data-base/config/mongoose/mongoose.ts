import * as mongoose from "mongoose";
import { Application } from "express";

import { Configuration } from "./configuration/configuration";
import { Development } from "./configuration/development";
import { Router } from "./router/router";

export class Mongoose {
    constructor(private server: Application) {}

    private configuration: Configuration;
    private router: Router;
    public DB: any;

    public start(): void {
        this.setConfiguration();
        this.setRouter();
    }

    private setConfiguration() {
        this.configuration = new Development();
    }

    private setRouter() {
        this.router = new Router(this.server);
    }
}