import * as Mongoose from "mongoose";

import { Controller } from "../base/controller";

export class StaffController extends Controller {
    private model = Mongoose.model('Staff');

    public create(request, response, next): void {
        let model = new this.model(request.body);

        model.save(function (error, product, numAffected) {
            if (error) {
                return next(error);
            } else {
                console.log(product);
                response.json(model);
            }
        });
    }

    public read(): void { }
    public update(): void { }
    public delete(): void { }
}