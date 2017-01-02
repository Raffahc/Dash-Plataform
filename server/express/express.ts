import * as express from "express";
import * as bodyParser from "body-parser";
import * as methodOverride from "method-override";

export class Express {
    constructor(private publicFolderPath: string) { }

    private port: Number = 3000;
    public application: express.Application;

    private configBodyParser(): any {
        return {
            extended: true
        };
    }

    public start(): void {
        let configBodyParser = this.configBodyParser();

        this.application = express();

        this.application.use(bodyParser.urlencoded(configBodyParser));
        this.application.use(bodyParser.json());
        this.application.use(methodOverride());

        // this.routes(this.application);
        this.application.use(express.static(this.publicFolderPath));
        this.application.listen(this.port);

        console.info('\nServer Running at http://localhost:' + this.port + '\n');
    }

    public setPort(port: Number) {
        this.port = port;
    }
}