import * as Mongoose from "mongoose";

import { IStaff } from "./staff.document";

export const StaffSchema = Mongoose.model<IStaff>('Staff', new Mongoose.Schema({
    email: {
        unique: true,
        required: true,
        trim: true,
        type: String
    },

    name: String,
    phone: String
}))