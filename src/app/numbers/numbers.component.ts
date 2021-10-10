import { Component, OnInit } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-numbers',
  templateUrl: './numbers.component.html',
  styleUrls: ['./numbers.component.css']
})
export class NumbersComponent implements OnInit {

  @Output() numberEvent = new EventEmitter<string>();


  getNumber(value: string){
    this.numberEvent.emit(value);
  }


  constructor() { }

  ngOnInit(): void {
  }

}
