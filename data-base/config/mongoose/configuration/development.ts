import { Configuration } from "./configuration";

export class Development extends Configuration {

    constructor() {
        const databaseName = "mongodb://localhost/dash-plataform";
        const sessionSecret = "developmentSecret";

        super(databaseName, sessionSecret);
    }
}