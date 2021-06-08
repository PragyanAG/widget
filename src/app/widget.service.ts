import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WidgetService {
  uri = '/api/routes';
  constructor(private http: HttpClient) { }
  getUserFeedbacks() {
    console.log(this.uri + '/getUserFeedback');
    return this
           .http
           .get(this.uri + '/getUserFeedback');
  }
}
