import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'FICTIZIA GROUP';
  messages: Array<any> = [];
  addMessage( ev ) {
    // console.info(ev);
    this.messages.push(ev);
  }
}
