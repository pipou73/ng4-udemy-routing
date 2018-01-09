import {Component, OnInit, OnDestroy} from '@angular/core';
import {ActivatedRoute, Params} from "@angular/router";
import {User} from "./user.model";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit, OnDestroy {

  user: User;
  paramsSubscription: Subscription;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    // this.route.snapshot.params['id']
    this.paramsSubscription = this.route.params
        .subscribe(
            (params: Params) => {
              this.user = new User(
                  params['id'],
                  params['name']
              );
            }
        );
  }

  ngOnDestroy(){
    this.paramsSubscription.unsubscribe();
  }
}
