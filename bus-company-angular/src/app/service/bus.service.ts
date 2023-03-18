import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Bus} from "../model/bus";

@Injectable({
  providedIn: 'root'
})
export class BusService {
  private URL_API = 'http://localhost:8080/bus';

  constructor(private httpClient: HttpClient) {
  }

  getAll(): Observable<Bus[]> {
    return this.httpClient.get<Bus[]>(this.URL_API);
  }

  findById(id: number): Observable<Bus> {
    return this.httpClient.get<Bus>(this.URL_API + id);
  }

  deleteBus(id): Observable<Bus> {
    return this.httpClient.delete<Bus>(this.URL_API + id);
  }

  editBus(id: number, bus): Observable<Bus> {
    return this.httpClient.put<Bus>(this.URL_API + id, bus);
  }

  saveBus(bus: Bus): Observable<Bus> {
    return this.httpClient.post<Bus>(this.URL_API, bus);
  }
}
