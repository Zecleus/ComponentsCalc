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
  }

  getSecondNum(value: string){
    this.secondNum = Number(value);
  }

  getOperation(value : string){
    this.operation = value;
  }

  toggleDarkMode(){
    this.darkmode = !this.darkmode;
  }

}
