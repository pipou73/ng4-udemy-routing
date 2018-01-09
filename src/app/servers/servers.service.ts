import {Server} from "./server/server.model";
export class ServersService {
    private servers: Server[] = [
      new Server(1, 'ProductionServer', 'online'),
      new Server(2, 'TestServer', 'offline'),
      new Server(3, 'DevServer', 'offline'),
    ];

    getServers(): Server[] {
        return this.servers;
    }

    getServer(id: number): Server {
        return this.servers.find((server: Server) => {
            return server.id === id
        });
    }

    updateServer(id: number, serverInfo: {name: string, status: string}) {
        const server = this.getServer(id);
        if (server) {
            server.name = serverInfo.name;
            server.status = serverInfo.status;
        }
    }
}