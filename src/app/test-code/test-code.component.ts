import { Component } from '@angular/core';



@Component({

  selector: 'app-test',

  template: `

  <div>

  <h2 [class]="successClass">

    Preetham here

  </h2>

  <p [ngStyle]="customStyle">How are you</p>

  <button (click)="onClick()">Greet</button>

  {{greeting}}



  <input #myInput type ="text"/>

  <button (click)="logMessage(myInput.value)">log</button>

  <input [(ngModel)]="name" type="text" value=""/>

  {{name}}

</div>`,

  styles: [

    `.text-success{

        color:green;

    }`

  ]

})

export class TestCodeComponent {



constructor(){



}



  title = 'hotelinventory';

  public greeting = "";

  public customStyle = {

    fontStyle: "italic",

    backgroundColor: "aqua",

    borderRadius: "100px",

    height: "30px",

    padding: "5px"

  }

  public name =""



  public successClass = "text-success";

  onClick() {

   

    this.greeting = "good evening"

  }



   logMessage(input : String){

    console.log(input)

  }



}
