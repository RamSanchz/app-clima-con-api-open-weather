import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ClimaService {
  ciudad = '';
  key = 'c963ff73f391ac241f1faa96de4c4e7b';
  url = `https://api.openweathermap.org/data/2.5/weather?q=`;
  lenguaje = 'sp';

  constructor(private http: HttpClient) {}

  getClima(ciudad: string): Observable<any> {
    const URL = `${this.url}${ciudad}&appid=${this.key}&lang=${this.lenguaje}&units=metric`;

    return this.http.get(URL);
  }
}
