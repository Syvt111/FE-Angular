import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class LocationService {
  private URL_API = 'http://localhost:8080/busType';

  constructor(private httpClient: HttpClient) {
  }

  getAll(): Observable<Location[]> {
    return this.httpClient.get<Location[]>(this.URL_API);
  }
}
