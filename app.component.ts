import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'CodeSandbox';
  clrChange = 'colorRed';
  enteredData: string = '';
  primeNum: boolean = false;
  changeColor() {
    this.clrChange = 'colorGreen';
  }

  sendData(data: string) {
    this.enteredData = data;
  }

  chkPrime(val: string) {
    if (this.isPrime(Number(val))) {
      this.primeNum = true;
    } else {
      this.primeNum = false;
    }
  }
  isPrime(val: number): boolean {
    if (val <= 1) {
      return false;
    }
    for (let i = 2; i < Math.sqrt(val); i++) {
      if (val % i == 0) return false;
    }
    return true;
  }
}
