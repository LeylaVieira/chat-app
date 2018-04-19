// Importar el Input desde el core de angular
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'chat-messagebox',
  templateUrl: './messagebox.component.html',
  styleUrls: ['./messagebox.component.scss']
})
export class MessageboxComponent implements OnInit {
  @Output() clicked = new EventEmitter<object>(); // Para almacenar el objeto mensaje para emitir al padre

  // Etiquetas de los elementos
  label: String = 'ENVIAR';
  placeholder: String = 'Escribe algo...';

  username: string;
  messagetext: string;

  constructor() { }

  ngOnInit() {
  }

  emitEvent() {
    // console.info("Click en el botón..");
    // console.info(this.username);
    this.clicked.emit({
      username: this.username,
      messagetext: this.messagetext
    });
  }
}
