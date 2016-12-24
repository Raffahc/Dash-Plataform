import * as express from "express";
import * as bodyParser from "body-parser";
import * as methodOverride from "method-override";

export class Express {
    constructor(
        private routes: any,
        private publicFolderPath: string) {
    }

    private port: Number = 3000;
    private server: any;

    private configBodyParser(): any {
        return {
            extended: true
        };
    }

    public start(): void {
        let configBodyParser = this.configBodyParser();

        this.server = express();

        this.server.use(bodyParser.urlencoded(configBodyParser));
        this.server.use(bodyParser.json());
        this.server.use(methodOverride());

        // this.routes(this.server);
        this.server.use(express.static(this.publicFolderPath));
        this.server.listen(this.port);

        console.info('\nServer Running at http://localhost:' + this.port + '\n');
    }

    public setPort(port: Number) {
        this.port = port;
    }
}