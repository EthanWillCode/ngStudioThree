import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-equipment',
  templateUrl: './equipment.component.html',
  styleUrls: ['./equipment.component.css']
})
export class EquipmentComponent implements OnInit {
   equipmentItems: object[] = [
       {name: 'Duct Tape', mass: 0.5},
       {name: 'Space Camera', mass: 20},
       {name: 'Food', mass: 150},
       {name: 'Oxygen Tanks', mass: 400},
       {name: 'AE-35 Unit', mass: 5},
       {name: 'ISS Supplies', mass: 800},
       {name: 'Water', mass: 250},
       {name: 'Satellite', mass: 1200},
       {name: 'R2 Unit', mass: 32}
   ];
   cargoHold: object[] = [];
   cargoMass: number = 0;
   maximumAllowedMass: number = 2000;
   maxItems: number = 10;
   remainingMass: number = 2000;
   constructor() { }

   ngOnInit() { }

   // Code your addItem function here:
   addItem(item): boolean{
    this.cargoHold.push(item);
    this.cargoMass += item.mass;
    this.remainingMass = this.maximumAllowedMass - this.cargoMass;
    
    if(this.remainingMass<=200){

      return true;
    } else {
      return false;
    }
   }
  //  canAdd(item):boolean{
  //   console.log(this.cargoHold.length)
  //   console.log(typeof this.cargoHold.length)
  //   if(this.cargoHold.length === this.maxItems || item.mass > this.remainingMass){
  //       return true;
  //   } else {
  //     return false;
  //   }
  //  }
  hasLessThanTwo(item):boolean{
    let numOf: number = 0;
    for(let i =0; i<this.cargoHold.length; i++){
      if(this.cargoHold[i] === item){
        numOf++
      }
    }
  
    if(numOf < 2){
      return true
    } else {
      return false;
    }
  }
}
