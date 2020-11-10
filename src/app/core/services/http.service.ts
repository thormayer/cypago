import { Injectable } from '@angular/core';
import * as mock from '../static/data.static';
@Injectable({
  providedIn: 'root'
})
export class HttpService {

  data = mock.data;

  constructor() { }


  get() {
    return this.data;
  }

}
