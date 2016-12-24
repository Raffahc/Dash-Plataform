import { Express } from "./express/express";

export class Server {
    constructor(
        private routes: any,
        private publicFolderPath: string) {

        this.server = new Express(routes, publicFolderPath);
    }

    public server: Express;
} 