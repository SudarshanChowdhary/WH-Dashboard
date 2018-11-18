import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';
// import 'rxjs/Rx';

@Injectable()
export class HolmesService {
  constructor(private http: HttpClient) { }
  getData(): Observable<any>{
    return this.http.get("../assets/mock-json.json");
  }
}
