import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-component',
  templateUrl: './test-component.component.html',
  styleUrls: ['./test-component.component.scss']
})
export class TestComponentComponent implements OnInit {

  name:String;
  speed:number;
  model:String;
  colors:Colors;
  options:string[];
  isEdit:boolean = false;

  constructor() { }

  ngOnInit() {
    this.name = 'Audi';
    this.model = 'RS8';
    this.speed = 220;
    this.colors = {
      car: 'White',
      salon: 'Black',
      wheel: 'Silver'
    };
    this.options = ["ABS", "Автопилот","Автопаркинг"];
  }


  carSelect(carName) {
    if (carName == 'bmw') {
      this.name = 'BMW';
      this.model = '7';
      this.speed = 250;
      this.colors = {
        car: 'Pink',
        salon: 'Blue',
        wheel: 'Black'
      };
      this.options = ["ABS", "Автопаркинг"];
    } else if (carName == 'audi') {
      this.name = 'Audi';
      this.model = 'RS7';
      this.speed = 220;
      this.colors = {
        car: 'Green',
        salon: 'Blue',
        wheel: 'BlackWhite'
      };
      this.options = ["ABS", "Автопилот", "Автопаркинг"];
    } else if (carName == 'mer'){
      this.name = 'Mercedes';
      this.model = 'c422';
      this.speed = 150;
      this.colors = {
        car: 'Pink',
        salon: 'Blue',
        wheel: 'Black'
      };
      this.options = ["ABS", "Автопилот", "Автопаркинг"];
    }
}

  addOpt(value: string) {
    this.options.unshift(value);
    return false;
  }

  DeleteOpt(opt: string) {
    for(let i=0; i<this.options.length; i++){
      if(this.options[i] == opt)
        this.options.splice(i,1);
    }
  }

  showEdit() {
    this.isEdit = !this.isEdit;

  }
}

interface Colors {
  car:String;
  salon:String;
  wheel:String;
}
