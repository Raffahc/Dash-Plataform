import { Express } from "./express/express";

export class Server {
    constructor(
        private publicFolderPath: string) {

        this.application = new Express(publicFolderPath);
    }

    public application: Express;
} 