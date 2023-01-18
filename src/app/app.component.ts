import { Component, Inject } from '@angular/core';
import { ServiceService } from './services/service.service';
import { HttpEventType } from '@angular/common/http';
import { environment } from './environments/environment';
import { DOCUMENT } from '@angular/common';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-frontend';

  constructor(private service: ServiceService) { }

  mysqlversion: string = ''
  mysqlcomment: string = ''

  ngOnInit(): void {
    this.service.get().subscribe((httpEvent) => {
      switch (httpEvent.type) {
        case HttpEventType.Response:
          this.mysqlversion = httpEvent.body[4]['Value']
          this.mysqlcomment = httpEvent.body[5]['Value']
          break
      }
    })
  }
}
