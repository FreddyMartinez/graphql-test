import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  constructor(private httpClient: HttpClient) { }

  getTestData() {
    return this.httpClient.get<any>('http://localhost:3000/hello');
  }
}
