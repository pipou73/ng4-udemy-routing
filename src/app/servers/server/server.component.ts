import {Component, OnInit, OnDestroy} from '@angular/core';
import {Server} from "./server.model";
import {ServersService} from "../servers.service";
import {ActivatedRoute, Router, Params, Data} from "@angular/router";
import { Subscription } from "rxjs";

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
// export class ServerComponent implements OnInit, OnDestroy {
export class ServerComponent implements OnInit {

  server: Server;
  serverSubscribe: Subscription;
  constructor(
      private serversService: ServersService,
      private route: ActivatedRoute,
      private router: Router
  ) { }

  ngOnInit() {
    this.route.data.subscribe((data: Data) => {
      this.server = data['server'];
    });
    // const id = +this.route.snapshot.params['id'];
    // this.server = this.serversService.getServer(id);
    //
    // this.serverSubscribe = this.route.params.subscribe((params: Params) => {
    //   this.server = this.serversService.getServer(+params['id'])
    // });
  }

  onEdit() {
      this.router.navigate(['edit'], {relativeTo: this.route, queryParamsHandling: 'preserve'})
      // this.router.navigate(['edit'], {relativeTo: this.route, queryParamsHandling: 'merge'})
  }

  // ngOnDestroy() {
  //   this.serverSubscribe.unsubscribe();
  // }
}
