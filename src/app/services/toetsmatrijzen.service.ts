import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import * as myGlobals from '../globals';

@Injectable()
export class ToetsmatrijzenService {
  constructor(private http: Http) {
    console.log('ToetsmatrijzenService Initialized...');
  }

  getToetsmatrijzen() {
    return this.http.get(myGlobals.baseUrl+'toetsen/')
      .map(res => res.json());
  }

  getToetsmatrijzenByObject(obj) {
    return this.http.get(obj.href)
      .map(res => res.json());
  }

  getToetsmatrijzenById(id) {
    return this.http.get(myGlobals.baseUrl+'toetsmatrijzen/' + id)
      .map(res => res.json());
  }

  getDataByHref(href) {
    return this.http.get(href)
      .map(res => res.json());
  }
}
