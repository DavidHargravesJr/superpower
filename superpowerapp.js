var newVillain
var newHero

//gets new hero and name as well as reveals hero pic
function charactername() {
	var name = document.getElementById("myText").value;
	var hero = new Hero(name)
	hero.name = name
	document.getElementById("demo").innerHTML = "THE MAGNIFICENT  " + name + "       ABILITY: " + hero.ability + "  POWER: " + hero.energy + "  FAME: " + hero.fame;
	console.log(hero)
	readyBtns()
	newHero = hero
	$('#picone').css("display", "block");
	$('.text').css("display", "block");
}

//internal counter 
var counter
function getCounterNum(){
var counter = document.getElementById("demo").counter;
if (counter == 1){
		$('#pictwo').css("display", "block");
	}}

//gets new villain and name and reveals villain pic
function characternameVillain() {
	var name = document.getElementById("myText").value;
	var villain = new Villain(name)
	villain.name = name
	document.getElementById("demo").innerHTML = "THE HORRIBLE  " + name + "       ABILITY: " + villain.ability + "  POWER: " + villain.energy + "  FAME: " + villain.fame;
	console.log(villain)
	readyVBtns()
	newVillain = villain
	$('#picone2').css("display", "block");
	$('.text').css("display", "block");
}


function startUp() {
	var input = $('<input type="text" id="myText" value="">')
	$('#target').append("CHARACTER NAME: ").append(input);
	var btn1 = $('<button type="button1" class="btn1" onclick="charactername()">HERO</button>')
	$('#target').append(btn1);

	var btn2 = $('<button type="button2" class="btn2" onclick="characternameVillain()">VILLAIN</button>')
	$('#target').append(btn2);
	$('.button0').remove();
}

//appends hero & villain buttons then removes begin button
$(startUp());



// hero fight /recover / use power buttons append function
function readyBtns() {
	var btn3 = $('<button class="btn3"onclick="fight(newHero)">BATTLE</button>')
	$('.container').append(btn3).append(" OR ");
	var btn4 = $('<button class="btn4" onclick="recover(newHero)">RECOVER</button>')
	$('.container').append(btn4).append(" OR ");
	var btn5 = $('<button class="btn5" onclick="usePower(newHero)">USE POWER</button>')
	$('.container').append(btn5);
	$('.btn1').remove();
	$('.btn2').remove();
}

//villain buttons
function readyVBtns() {
	var btn3 = $('<button class="btn3"onclick="fight(newVillain)">BATTLE</button>')
	$('.container').append(btn3).append(" OR ");
	var btn4 = $('<button class="btn4" onclick="recover(newVillain)">RECOVER</button>')
	$('.container').append(btn4).append(" OR ");
	var btn5 = $('<button class="btn5" onclick="usePower(newVillain)">USE POWER</button>')
	$('.container').append(btn5);
	$('.btn1').remove();
	$('.btn2').remove();
}


var fight = function(arg) {
	console.log(arg)
	arg.fight()
	document.getElementById("demo").innerHTML = arg.name + " ABILITY: " + arg.ability + " POWER: " + arg.energy + " FAME: " + arg.fame;
	getCounterNum();
}
var recover = function(arg) {
	console.log(arg)
	arg.recover()
	document.getElementById("demo").innerHTML = arg.name + " ABILITY: " + arg.ability + " POWER: " + arg.energy + " FAME: " + arg.fame;
}
var usePower = function(arg) {
	console.log(arg)
	arg.usePower()
	document.getElementById("demo").innerHTML = arg.name + " ABILITY: " + arg.ability + " POWER: " + arg.energy + " FAME: " + arg.fame;
}