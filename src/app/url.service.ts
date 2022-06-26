import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({ providedIn: 'root' })
export class UrlService {
  constructor(private http: HttpClient) {}

  getData() {
    return this.http.get(environment.baseUrl + 'api/branches//homepage');
  }
}
