import { HttpClient } from '@angular/common/http';
import { Injectable, Inject } from '@angular/core';
import { Observable } from 'rxjs';
import { DOCUMENT } from '@angular/common';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(@Inject(DOCUMENT) private document: any, private http: HttpClient) { }

  get(): Observable<any> {
    return this.http.request(
      'GET',
      `${environment.backendProtocol}://${this.document.location.hostname}/api`,
      {
        reportProgress: true,
        observe: 'response',
      }
    );
  }
}
