import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css']
})
export class HelloComponent implements OnInit {

   myname = "demouser";
  constructor() { }

  ngOnInit(): void {
  }

  methodFirst(){
    var a=2;
    var b=3;
    var c = a+b;
  }
  methodSecond(){
    var a=2;
    var b=3;
    var c = a+b;
  }
  methodThird(){
    var a=2;
    var b=3;
    var c = a+b;
  }
  methodForth(){
    var a=2;
    var b=3;
    var c = a+b;
  }
}
