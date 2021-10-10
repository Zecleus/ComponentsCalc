import { Component, OnInit } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-operation',
  templateUrl: './operation.component.html',
  styleUrls: ['./operation.component.css']
})
export class OperationComponent implements OnInit {

  @Output() operationEvent = new EventEmitter<string>();

  operator = '';

  additionButton(){
    this.operator = 'add';
    this.operationEvent.emit(this.operator);
  }

  subtractButton(){
    this.operator = 'subtract';
    this.operationEvent.emit(this.operator);
  }

  multiplyButton(){
    this.operator = 'multiply';
    this.operationEvent.emit(this.operator);
  }

  divideButton(){
    this.operator = 'divide';
    this.operationEvent.emit(this.operator);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
