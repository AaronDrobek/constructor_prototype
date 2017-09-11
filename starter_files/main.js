'use strict';
//###################################################################
//        __
//   ____/ /___  ____ ______
//  / __  / __ \/ __ `/ ___/
// / /_/ / /_/ / /_/ (__  )
// \__,_/\____/\__, /____/
//            /____/

// Dog Constructor & Prototype
function Dog (hungry) {
  this.status = "normal";
  this.color = "black";
  this.hungry = hungry;
}




// Instances of Dog
// Needed: sadie, moonshine, atticus
let sadie = new Dog(false)
let moonshine = new Dog(true)
let atticus = new Dog(true)






//     __
//    / /_  __  ______ ___  ____ _____  _____
//   / __ \/ / / / __ `__ \/ __ `/ __ \/ ___/
//  / / / / /_/ / / / / / / /_/ / / / (__  )
// /_/ /_/\__,_/_/ /_/ /_/\__,_/_/ /_/____/

// Human Constructor & Prototype
function Human (cool) {
  this.owner = "";
  this.cool = cool;

  this.feed = function(name){
    return name.hungry = false;
  };
  this.pet = function(name){
    return name.status = "happy";
  }
}



let mason = new Human(false)
let julia = new Human(true)
// Instances of Human
// Needed: mason, julia
