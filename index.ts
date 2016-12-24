import { Server } from './server/index';

const uiPath: string = './web-package';
let server = new Server('', uiPath);

server.server.start();