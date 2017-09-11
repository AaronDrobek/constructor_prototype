'use strict';
//###################################################################
//        __
//   ____/ /___  ____ ______
//  / __  / __ \/ __ `/ ___/
// / /_/ / /_/ / /_/ (__  )
// \__,_/\____/\__, /____/
//            /____/

// Dog Constructor & Prototype
function Dog () {
  this.status = "normal";
  this.color = "black";
  this.hungry = true;
  this.pet = function(name){
    console.log(this.status = "happy");
  }

}


// Instances of Dog
// Needed: sadie, moonshine, atticus
let sadie = new Dog()
console.log(sadie.hungry = false);
let moonshine = new Dog()
let atticus = new Dog()





//     __
//    / /_  __  ______ ___  ____ _____  _____
//   / __ \/ / / / __ `__ \/ __ `/ __ \/ ___/
//  / / / / /_/ / / / / / / /_/ / / / (__  )
// /_/ /_/\__,_/_/ /_/ /_/\__,_/_/ /_/____/

// Human Constructor & Prototype
function Human () {
  this.owner = false;
  this.cool = true;
  this.feed = function(name){
    console.log(name.hungry = false);
  };
  this.pet = function(name){
    console.log(name.status = "happy");
  }
}


let mason = new Human()
console.log(mason.cool = false);

let julia = new Human()
// Instances of Human
// Needed: mason, julia
