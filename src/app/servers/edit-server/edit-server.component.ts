import { Component, OnInit } from '@angular/core';
import {Server} from "../server/server.model";
import {ServersService} from "../servers.service";
import {ActivatedRoute, Params, Router} from "@angular/router";
import {CanDeactivateGuard} from "./can-deactivate-guard.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-edit-server',
  templateUrl: './edit-server.component.html',
  styleUrls: ['./edit-server.component.css']
})
export class EditServerComponent implements OnInit, CanDeactivateGuard {
  server: Server;
  serverName = '';
  serverStatus = '';
  allowEdit = false;
  changesSaved = false;
  constructor(
      private serversServer: ServersService,
      private route: ActivatedRoute,
      private router: Router
  ) { }

  ngOnInit() {
    console.log('queryParams', this.route.snapshot.queryParams)
    console.log('fragment', this.route.snapshot.fragment)
    this.route.queryParams
        .subscribe(
            (queryParams: Params) => {
              this.allowEdit = queryParams['allowEdit'] === '1';
            }
        );
    this.route.fragment.subscribe();
    const id = +this.route.snapshot.params['id'];
    this.server = this.serversServer.getServer(id);
    //subscribe route params to update the id if params changed!
    this.serverName = this.server.name;
    this.serverStatus = this.server.status;
  }

  onUpdateServer() {
    this.serversServer.updateServer(
        this.server.id,
        {
          name: this.serverName,
          status: this.serverStatus
        }
    )
      this.changesSaved = true;
      this.router.navigate(['../'], {relativeTo: this.route})
  }

  canDeactivate(): Observable<boolean> | Promise<boolean> | boolean {
      if (!this.allowEdit) {
          return true;
      }
      if (
          (this.serverName !== this.server.name || this.serverStatus !== this.server.status) &&
          !this.changesSaved
      ) {
            return confirm('Do you want to discard the changes?');
      } else {
          return true;
      }
  }
}
