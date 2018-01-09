import {Resolve, ActivatedRouteSnapshot, RouterStateSnapshot} from "@angular/router";
import {Server} from "./server.model";
import {Observable} from "rxjs";
import {ServersService} from "../servers.service";
import {Injectable} from "@angular/core";

@Injectable()
export class ServerResolver implements Resolve<Server> {

    constructor(private serversService: ServersService) {}
    resolve(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<Server> | Promise<Server> | Server {
        return this.serversService.getServer(+route.params['id']);
    }
}