import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {Bus} from "../model/bus";
import {HttpClient} from "@angular/common/http";
import {BusType} from "../model/bus-type";

@Injectable({
  providedIn: 'root'
})
export class BusTypeService {

  private URL_API = 'http://localhost:8080/busType';

  constructor(private httpClient: HttpClient) {
  }

  getAll(): Observable<BusType[]> {
    return this.httpClient.get<BusType[]>(this.URL_API);
  }
}
