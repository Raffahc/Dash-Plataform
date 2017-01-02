import { Document } from "mongoose"

export interface IStaff extends Document {
    email: string,
    name: string,
    phone: string
}