import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss']
})
export class AlertComponent implements OnInit {

  @Input()
  public header : string = ""; 

  @Output()
  public onInteract : EventEmitter<any> = new EventEmitter();

  private status : boolean = false;

  constructor() { }

  ngOnInit() {
  }
  // Função para quando o botão cancelar for clicado:
  cancelClicked(){
    console.log("cancelar clicado!")
    this.onInteract.emit(false)
  }

  // Função para quando o botão confirmar for clicado:
  confirmClicked(){
    console.log("confirmar clicado!")
    this.onInteract.emit(true)
  }

  setStatus(newStatus : boolean) {
    this.status = newStatus
  }
}
