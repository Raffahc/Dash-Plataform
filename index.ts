import { DataBase } from "./data-base/index";
import { Server } from "./server/index";

const uiPath: string = './web-package';

let server = new Server(uiPath);
let dataBase = new DataBase(server.application.application);

server.application.start();