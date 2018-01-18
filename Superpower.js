//random number for range
function getRndInteger(min, max) {
 return Math.floor(Math.random() * (max - min + 1) ) + min;
}


// Hero object
function Hero(name) {
	this.name = name
  this.fame = 5
  this.ability = 5
  this.energy = 5
	this.counter = 0
	
 this.usePower = function(){
  this.fame +=(getRndInteger(2,5))
  this.ability +=(getRndInteger(-1,1))
  this.energy +=(getRndInteger(-2,-4))
	 this.counter +=(1);
}
this.recover = function(){
	this.fame +=(getRndInteger(-2,-4))
  this.ability +=(getRndInteger(1,3))
  this.energy +=(getRndInteger(3,5))
	this.counter +=(1);
  }
this.fight = function(){
	this.ability +=(getRndInteger(-1,-3))
  this.fame +=(getRndInteger(-1,5))
  this.energy +=(getRndInteger(-1,-3))
	this.counter +=(1);
	}
this.levelup = function(){
  if (this.fame >= 10 && this.energy >= 10 && this.ability >= 10) {
	this.level = 1 ;
	alert('You Leveled Up!')
	}
	else if (this.fame >= 20 && this.energy >= 20 && this.ability >= 20) {
	this.level = 2 ;
	alert('You Leveled Up!')
	}
this.check = function(){
	if (this.fame <= 5){
	alert(" Nobody Likes you! Do something to get attention!")
	}
	else if(this.energy <= 4){
	alert("Your energy is running Low. You should recover!")
	}
	else if(this.ability <= 01){
	alert("Not Much left to keep going. Retreat or fight on!")
	}
	else{
	alert("Persue at your own risk!");
}}}
}

// Villain object
function Villain(name) {
	this.name = name
  this.fame = 5
  this.ability = 5
  this.energy = 5
	this.counter = 0
	
 this.usePower = function(){
  this.fame +=(getRndInteger(2,5))
  this.ability +=(getRndInteger(-2,2))
  this.energy +=(getRndInteger(-2,-4))
	this.counter +=(1);
}
this.recover = function(){
	this.fame +=(getRndInteger(-2,-4))
  this.ability +=(getRndInteger(1,3))
  this.energy +=(getRndInteger(3,5))
	this.counter +=(1);
  }
this.fight = function(){
	this.ability +=(getRndInteger(-1,-3))
  this.fame +=(getRndInteger(3,6))
  this.energy +=(getRndInteger(-1,-3))
	this.counter +=(1);
	}
this.levelup = function(){
  if (this.fame >= 10 && this.energy >= 10 && this.ability >= 10) {
	this.level = 1 ;
	alert('You Leveled Up!')
	}
	else if (this.fame >= 20 && this.energy >= 20 && this.ability >= 20) {
	this.level = 2 ;
	alert('You Leveled Up!')
	}
this.check = function(){
	if (this.fame <= 5){
  alert(" Nobody Likes you! Do something to get attention!")
	}
	else if(this.energy <= 4){
	alert("Your energy is running Low. You should recover!")
	}
	else if(this.ability <= 01){
	alert("Not Much left to keep going. Retreat or fight on!")
	}
	else{
	alert("Persue at your own risk!");
	}}}
}
