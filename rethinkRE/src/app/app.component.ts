import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'rethinkRE';
  constructor(protected route: ActivatedRoute,
    protected router: Router,){

    }
    ngOnInit(){
    }

    search() {
      //navigation to search results page
      this.router.navigate(['/search'] );
    }
}
