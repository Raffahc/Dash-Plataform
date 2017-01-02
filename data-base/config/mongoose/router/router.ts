import { Application } from "express";

import { StaffRoute } from "../document/staff/staff.route";

export class Router {
    constructor(private server: Application) {
        this.mapRoutes();
    }

    private mapRoutes() {
        new StaffRoute(this.server);
    }
}