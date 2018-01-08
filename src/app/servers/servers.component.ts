import { Component, OnInit } from '@angular/core';
import {Server} from "./server/server.model";
import {ServersService} from "./servers.service";

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  private servers: Server[] = []
  constructor(private serversService: ServersService) { }

  ngOnInit() {
    this.servers = this.serversService.getServers();
  }

}
