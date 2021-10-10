import { OnInit } from '@angular/core';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {
 
  @Input() num1 = 0;
  @Input() num2 = 0;
  @Input() operation = '';
  
  result = 0;
  
  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(){
    this.calculate(this.num1, this.num2, this.operation);
  }

   calculate(n1 : number, n2 : number, ope : string){
    switch(ope){
        case 'add':
          this.result = n1 + n2;
          break;
        case 'subtract':
          this.result = n1-n2;
          break;
        case 'multiply':
          this.result = n1*n2;
          break;
        case 'divide':
          this.result = n1/n2;
          break;
    }
}

}
