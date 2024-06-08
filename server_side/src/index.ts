import { Server } from "./server";
const server = new Server();
server.listen((port: number) => {
  console.log("server is live and listening port" + `${port}`);
});
