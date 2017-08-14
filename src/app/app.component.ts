import { Component } from '@angular/core';
import {Http, Response} from "@angular/http";
import {Observable} from "rxjs";
import 'rxjs/add/operator/map';
import {ITrade} from "./shared/ITrade";

@Component({
  selector: 'prade-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

    static extractData(res: Response) {
        const body = res.json();
        return body.payload || body.response || body || {};
    }

  private id: string = '0';

  constructor(public http: Http){
    this.http.get("http://www.pathofexile.com/api/public-stash-tabs?id=" + this.id).map(AppComponent.extractData).subscribe( (data:ITrade) => {
        console.log(data);
    });
  }
}
