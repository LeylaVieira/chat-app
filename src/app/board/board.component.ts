import { Component, OnInit, Input } from '@angular/core';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'chat-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {
// messagetext: string = "este es el board";
@Input() messages: Array<any>;

constructor() { }

ngOnInit() {
}

/*Función que uso para agregar la clase currentuser cuando el usuario es Paco, le invoco desde board.component.html*/
isUser(username) {
  if (username === 'Paco') {
    return true;
  } else {
    false;
  }
}

}
