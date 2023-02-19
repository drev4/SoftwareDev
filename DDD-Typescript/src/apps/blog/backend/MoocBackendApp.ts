import { Server } from './server';
import * as dotenv from 'dotenv'
export class MoocBackendApp {
  server?: Server;

  async start() {
    const port = process.env.PORT || '8000';
    this.server = new Server(port);
    dotenv.config()
    return this.server.listen();
  }

  get httpServer() {
    return this.server?.getHTTPServer();
  }

  async stop() {
    return this.server?.stop();
  }

}
