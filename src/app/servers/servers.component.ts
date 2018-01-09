import { Component, OnInit } from '@angular/core';
import {Server} from "./server/server.model";
import {ServersService} from "./servers.service";
import {Router, ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  private servers: Server[] = []
  constructor(
      private serversService: ServersService,
      private router: Router,
      // private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.servers = this.serversService.getServers();
  }

  onReload() {
    // this.router.navigate(['servers'], {relativeTo: this.route});
    this.router.navigate(['servers']);
  }
}
