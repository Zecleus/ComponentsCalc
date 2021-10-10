import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ComponentsCalc';

  firstNum = 0;
  secondNum = 0;

  operation = '';

  darkmode = false;

  getFirstNum(value: string){
    this.firstNum = Number(value);
    console.log(this.firstNum);
  }

  getSecondNum(value: string){
    this.secondNum = Number(value);
    console.log("Second Num: " + this.secondNum);
  }

  getOperation(value : string){
    this.operation = value;
    console.log(this.operation);
  }

  toggleDarkMode(){
    this.darkmode = !this.darkmode;
  }

}
