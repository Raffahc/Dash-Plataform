import { StaffController } from "./staff.controller";
import { Application } from "express";

export class StaffRoute {
    constructor(
        private server: Application) {
        
        this.controller = new StaffController();
        this.baseRoute();
    }

    private controller: StaffController;

    private baseRoute() {
        this.server.route('/api/staff')
            .get(this.controller.read)
            .post(this.controller.create)
            .patch(this.controller.update)
            .delete(this.controller.delete);
    }
}