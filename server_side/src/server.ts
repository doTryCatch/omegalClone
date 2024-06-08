import express, { Application } from "express";
import socketIO, { Server as SocketIOServer } from "socket.io";
import { createServer, Server as HTTPServer } from "http";
export class Server {
  private app!: Application;
  private httpServer!: HTTPServer;
  private io!: SocketIOServer;
  private readonly port: number = 5000;
  constructor() {
    this.initialize();
  }
  private initialize(): void {
    this.app = express();
    this.httpServer = createServer(this.app);

    this.io = new SocketIOServer(this.httpServer, {
      cors: {
        origin: "*",
      },
    });
  }
  public listen(callback: (port: number) => void): void {
    this.httpServer.listen(this.port, () => {
      callback(this.port);
    });
  }
}
