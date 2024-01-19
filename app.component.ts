import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'CodeSandbox';
  stuObj:any={
    stdId:0,
    stdName:"",
    stdSalary:0 
  };
  stuArr:any=[];
  
  addItem(data:any){
    this.stuArr.push(data.value);
    console.log(data.value);
    console.error(this.stuArr);
  }
  remItem(i:any){
   this.stuArr.splice(i,1); 
  }


}
