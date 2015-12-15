//here is all the actors to be in the game area at any time through the game. some are tooltips, others are obstacles
//references to the characters in the gameLevels code
var actorChars = {

	'@': Player,
	'o': Coin,
	'=': Lava, '|': Lava, 'v': Lava,
	'>': Wall2,
  	'h': AirFan,
  	'q': AirTip,
	'f': AirGuide,
	'p': PickUp,
	't': ArrowTut,
	'g': GravTut,
	'c': EnergyTut,
	'l': LavaTut,
	'w': BeginGame,
	'b': Bounce,
	'm': Patience,
	'z': RunTip
	
};

var gameCanv;
var gameCtx;

/*
if (!window.requestAnimationFrame)  
{ 
	window.requestAnimationFrame = (function()  
	{ 
		return window.webkitRequestAnimationFrame || 
     	window.mozRequestAnimationFrame || 
     	window.oRequestAnimationFrame || 
		window.msRequestAnimationFrame || 
		function(callback,element)  
		{ 
			window.setTimeout(callback, 1000 / 60); 
		}; 
	})(); 
} 
*/

  
function Level(plan) {
	
	this.width = plan[0].length;
	//use the number of rows to set the height

	this.height = plan.length;

	//store the individual tiles in our own, separate array
	this.grid = [];
	this.playerStatus = 'idle';
  
	this.actors = [];

	//loop through each row in the plan, creating an array in our grid
	for (var y = 0; y < this.height; y++) {
		var line = plan[y], gridLine = [];

		//loop through each array element in the inner array for the type of the tile
		for (var x = 0; x < this.width; x++) {

			var ch = line[x], fieldType = null;
			var Actor = actorChars[ch];
			
			if (Actor)
			{
				this.actors.push(new Actor(new Vector (x,y), ch));

			}
			else if (ch == "x")
				fieldType = "wall";
			
			else if (ch == "!")
				fieldType = "lava";

			gridLine.push(fieldType);
		}
		
		this.grid.push(gridLine);
	}


	this.player = this.actors.filter(function(actor) {
		return actor.type == "player"; 
	})[0]; 

}

function gameHud(level) {

	coinCount = 0;
	for(var i = 0; i < level.actors.length; i++)
	{
		if(level.actors[i].type == 'coin')
		{
			coinCount++;
		}
	}
	
	gameCanv = document.getElementById('gameCanvas');
	gameCtx = gameCanv.getContext('2d');
	
	gameCtx.rect(0, 0, gameCanv.width, gameCanv.height);
	gameCtx.lineWidth = 5;
	
	
	if(deathCount || coinCount || coinCount == 0) gameCtx.clearRect(0, 0, gameCanv.width, gameCanv.height);
	gameCtx.stroke();
	gameCtx.font = '50px Castellar';
	gameCtx.fillStyle = 'white';
	gameCtx.fillText('DEATHS: ' + deathCount, 60, 100);
	
	gameCtx.fillText('ORBS LEFT: ' + coinCount, 60, 300);
	
	
}

Level.prototype.isFinished = function(){

	return this.status != null && this.finishDelay < 0;

};

//function to help set some hitboxes
function Vector(x, y) {
	this.x = x; this.y = y;
}

Vector.prototype.plus = function(other) {
	return new Vector(this.x + other.x, this.y + other.y);
};


Vector.prototype.times = function(factor) {
	return new Vector(this.x * factor, this.y * factor);
};


//a Player has a size, speed and position.
function Player(pos) {
	this.pos = pos.plus(new Vector(0, -1.5));
	this.size = new Vector(1.3, 1.7);
	this.speed = new Vector(0, 0);
}
Player.prototype.type = "player";


//collectiable 'coin' has a wobble feature to it as well as size and position
function Coin(pos) { 
   this.basePos = this.pos = pos.plus(new Vector(0.2, 0.1)); 
   this.size = new Vector(0.4, 0.4); 
   this.wobble = Math.random() * Math.PI * 2; 
} 
Coin.prototype.type = "coin"; 


//the gravity pickup has similar attributes, just defined to do something later
function PickUp(pos) { 
	
	this.basePos = this.pos = pos.plus(new Vector(0.2, 0.1)); 
	this.size = new Vector(0.7, 0.7); 
	this.wobble = Math.random() * Math.PI * 5;
} 
PickUp.prototype.type = "pickUp"; 


//this is the stuff that kills you. the lava. has a position. a size and speed are for certain other lava pieces
function Lava(pos, ch){
	
	this.pos = pos;
	this.size = new Vector(1,1);
	if(ch == '=')
	{
		this.speed = new Vector(2,0);
	}
	else if(ch == '|')
	{
		this.speed = new Vector(0,2);
	}
	else if(ch == 'v')
	{
		this.speed = new Vector(0,3);
		this.repeatPos = pos;
	}
	
}

Lava.prototype.type = 'lava';

//here's my bouncing wall. has its position, size, and speed
function Wall2(pos, ch){

	this.pos = pos;
	this.size = new Vector(1.5, .5);
	if(ch == '>')
		this.speed = new Vector(2.5, 0);

}
Wall2.prototype.type = 'wall2';

function AirFan(pos, ch){
	
	this.basePos = this.pos = pos.plus(new Vector(0.1, 0.1));
	this.size = new Vector(1.5, 1.5);
	this.wobble = Math.random() * Math.PI * 2; 

}
AirFan.prototype.type = 'airFan';

//most of these functions are just defining the sizes of the tooltips that are around the beginning. only a position and size
function ArrowTut(pos, ch) {

	this.pos = pos;
	this.size = new Vector(5, 3.5);
}
ArrowTut.prototype.type = 'arrowTut';

function GravTut(pos, ch) {

	this.pos = pos;
	this.size = new Vector(6, 3.5);
}
GravTut.prototype.type = 'gravTut';

function EnergyTut(pos, ch) {

	this.pos = pos;
	this.size = new Vector(6, 3.5);
}
EnergyTut.prototype.type = 'energyTut';

function LavaTut(pos, ch) {

	this.pos = pos;
	this.size = new Vector(6, 3.5);
}
LavaTut.prototype.type = 'lavaTut';

function BeginGame(pos, ch) {

	this.pos = pos;
	this.size = new Vector(6, 3.5);
}
BeginGame.prototype.type = 'beginGame';

function Bounce(pos, ch) {

	this.pos = pos;
	this.size = new Vector(6, 3.5);
}
Bounce.prototype.type = 'bounce';

function AirGuide(pos, ch) {

	this.pos = pos;
	this.size = new Vector(5, 2);
}
AirGuide.prototype.type = 'airGuide';

function AirTip(pos, ch) {

	this.pos = pos;
	this.size = new Vector(4, 2.5);
}
AirTip.prototype.type = 'airTip';

function Patience(pos, ch) {

	this.pos = pos;
	this.size = new Vector(4.5,1.4);
}
Patience.prototype.type = 'timing';

function RunTip(pos, ch) {

	this.pos = pos;
	this.size = new Vector(4, 2);
}
RunTip.prototype.type = 'runTip';


//helper function to easily create an element of a type provided 
//and assign it a class.
function elt(name, className) {
	var elt = document.createElement(name);
	if (className) elt.className = className;
	return elt;
}

//main display class. keeps track of the scroll window using it.
function DOMDisplay(parent, level) {

//this.wrap corresponds to a div created with class of "game"
	this.wrap = parent.appendChild(elt("div", "game"));
	this.level = level;

	this.wrap.appendChild(this.drawBackground());

	//keeps track of actors
	this.actorLayer = null;

	this.drawFrame();
}


var scale = 30;


DOMDisplay.prototype.drawBackground = function() {
	var table = elt("table", "background");
	table.style.width = this.level.width * scale + "px";

	//assign a class to new row element directly from the string from
	//each tile in grid
	this.level.grid.forEach(function(row) {
		var rowElt = table.appendChild(elt("tr"));
		rowElt.style.height = scale + "px";
		row.forEach(function(type) {
			rowElt.appendChild(elt("td", type));
		});
	});
	return table;
};

//drawing the player agent
DOMDisplay.prototype.drawActors = function() {
	
	//create a new container div for actor dom elements
	var wrap = elt('div');

	this.level.actors.forEach(function (actor){
		var rect = wrap.appendChild(elt('div',
											'actor ' + actor.type));
		rect.style.width = actor.size.x * scale + 'px';
		rect.style.height = actor.size.y * scale + 'px';
		rect.style.left = actor.pos.x * scale + 'px';
		rect.style.top = actor.pos.y * scale + 'px';
	});
	return wrap;
};

DOMDisplay.prototype.drawFrame = function() {
	
	if (this.actorLayer)
		this.wrap.removeChild(this.actorLayer);
	this.actorLayer = this.wrap.appendChild(this.drawActors());
	this.wrap.className = 'game ' + (this.level.status || '') + ' ' + (this.level.playerStatus);
	this.scrollPlayerIntoView();

};

//keeps the player within the screen by a set amount
DOMDisplay.prototype.scrollPlayerIntoView = function() {
	var width = this.wrap.clientWidth;
	var height = this.wrap.clientHeight;

	//keeps player at least 1/3 away from side of screen
	var margin = width / 3;

	var left = this.wrap.scrollLeft, right = left + width;
	var top = this.wrap.scrollTop, bottom = top + height;

	var player = this.level.player;
	
	//change coordinates from the source to the scale
	var center = player.pos.plus(player.size.times(0.5))
				 .times(scale);

	if (center.x < left + margin)
		this.wrap.scrollLeft = center.x - margin;
	else if (center.x > right - margin)
		this.wrap.scrollLeft = center.x + margin - width;
	if (center.y < top + margin)
		this.wrap.scrollTop = center.y - margin;
	else if (center.y > bottom - margin)
		this.wrap.scrollTop = center.y + margin - height;
};

//clears the DOM
DOMDisplay.prototype.clear = function(){

	this.wrap.parentNode.removeChild(this.wrap);
}

//checks for an obstacle and returns it. the bottom of the screen counts as lava 
//and each of the sides and top will be counted as walls
Level.prototype.obstacleAt = function(pos, size)
{
	
	var xStart = Math.floor(pos.x);
	var xEnd = Math.ceil(pos.x + size.x);
	var yStart = Math.floor(pos.y);	
	var yEnd = Math.ceil(pos.y + size.y);
	
	if(xStart < 0 || xEnd > this.width || yStart < 0)
		return 'wall';
	
	if (yEnd > this.height)
		return 'lava';
	
	for(var y = yStart; y < yEnd; y++)
	{
		for(var x = xStart; x < xEnd; x++)
		{
			var fieldType = this.grid[y][x];
			
			if(fieldType)
			{
				return fieldType;
			}
		}
	}
};

//loop over each actor in our actors list and compare the  
//boundary boxes for overlaps. 
Level.prototype.actorAt = function(actor) { 
	

    for (var i = 0; i < this.actors.length; i++) { 
		
		var other = this.actors[i]; 
		
		if (other != actor && 
			actor.pos.x + actor.size.x > other.pos.x && 
			actor.pos.x < other.pos.x + other.size.x && 
			actor.pos.y + actor.size.y > other.pos.y && 
			actor.pos.y < other.pos.y + other.size.y) 

		return other; 
    } 
}; 



//update simulation each step based on keys and step size
Level.prototype.animate = function(step, keys) {

	if(this.status != null)
		this.finishDelay -= step;
	
	//ensure each is maximum 100 milliseconds 
	while (step > 0) {
		var thisStep = Math.min(step, maxStep);

		this.actors.forEach(function(actor) {
	
		actor.act(thisStep, this, keys);
		}, this);
	
    step -= thisStep;
	}
};


//this is where the lava will be getting it's movement
Lava.prototype.act = function(step, level)
{
	var newPos = this.pos.plus(this.speed.times(step));
	
	if(!level.obstacleAt(newPos, this.size))
		this.pos = newPos;
	else if(this.repeatPos)
		this.pos = this.repeatPos;
	else
		this.speed = this.speed.times(-1);
};


//bouncing wall gets it's movement
Wall2.prototype.act = function(step, level)
{
	var newPos = this.pos.plus(this.speed.times(step));
	
	if(!level.obstacleAt(newPos, this.size))
		this.pos = newPos;
	else
		this.speed = this.speed.times(-1);
		
};

AirFan.prototype.act = function(step, level)
{
	this.wobble += step * wobbleSpeed; 
	var wobblePos = Math.sin(this.wobble) * wobbleDist; 
	this.pos = this.basePos.plus(new Vector(wobblePos, wobblePos));	
};

var maxStep = 0.05;

var wobbleSpeed = 8, wobbleDist = 0.07; 

var coinCount = 0;
var deathCount = 0;
//collectible wobble movement
Coin.prototype.act = function(step) { 
	this.wobble += step * wobbleSpeed; 
	var wobblePos = Math.sin(this.wobble) * wobbleDist; 
	this.pos = this.basePos.plus(new Vector(0, wobblePos)); 
}; 


//gravity pickup wobble movement
PickUp.prototype.act = function(step) {

	this.wobble += step * wobbleSpeed; 
	var wobblePos = Math.sin(this.wobble) * wobbleDist; 
	this.pos = this.basePos.plus(new Vector(wobblePos, 0)); 
}; 


//the tooltips don't really have any acting to do, because they need to be static
ArrowTut.prototype.act = function(step) {

};

GravTut.prototype.act = function(step) {

};

EnergyTut.prototype.act = function(step) {

};

LavaTut.prototype.act = function(step) {

};

BeginGame.prototype.act = function(step) {

};

Bounce.prototype.act = function(step) {

};

Patience.prototype.act = function(step) {

};

RunTip.prototype.act = function(step) {

};

AirGuide.prototype.act = function(step) {

};

AirTip.prototype.act = function(step) {

};

//player movement variables
var maxStep = 0.05;

var playerXSpeed = 8;


//function for players X movement. speed.x starts at 0 then checks for key presses
//the level.playerStatus is for defining the status for cycling through the gifs in the css
//also has to check for if the player touches an obstacle
Player.prototype.moveX = function(step, level, keys) {
	
	this.speed.x = 0;
	if (keys.left)
	{
		this.speed.x -= playerXSpeed;
		level.playerStatus = 'leftRun';
	}
	if (keys.right)
	{
		this.speed.x += playerXSpeed;
		level.playerStatus = 'run';
	}
	
	if(this.speed.x == 0) level.playerStatus = 'idle';
	
	var motion = new Vector(this.speed.x * step, 0);
	var newPos = this.pos.plus(motion);
  
	var obstacle = level.obstacleAt(newPos, this.size);
	var otherWall = level.actorAt(this);
	
	if(obstacle)
		level.playerTouched(obstacle);
	else
		this.pos = newPos;
	
  
};

var gravity = 25;
var jumpSpeed = 15;

//handles the jumping and gif cycles and also when the player hits something in the air
//also handles the bouncing wall actor. it will shoot up the player by adding speed.y to itself and to the jumpspeed
Player.prototype.moveY = function(step, level, keys) {
	
	this.speed.y += step * gravity;
	
	var motion = new Vector(0, this.speed.y * step);
	var newPos = this.pos.plus(motion);

	var obstacle = level.obstacleAt(newPos, this.size);
	var otherWall = level.actorAt(this);
	
	if(obstacle)
	{
		level.playerTouched(obstacle);
		if(keys.up && this.speed.y > 0)
		{
			this.speed.y = -jumpSpeed;
		}
		else
			this.speed.y = 0;
					
	}
	else
	{
		this.pos = newPos;
	}
	
	if(otherWall)
	{
		if(otherWall.type == 'wall2') 
		{
			this.speed.y += -jumpSpeed/2;
		}
		else if(otherWall.type == 'airFan')
		{
			this.speed.y += Math.sin(-jumpSpeed);
		}
	}
	
	if(keys.right && this.speed.y > 0 || this.speed.y < 0)
	{
		level.playerStatus = 'air';
	}
	
	if(keys.left && (this.speed.y > 0 || this.speed.y < 0))
	{
		level.playerStatus = 'leftAir'; 
	}
	
};

//players movement for both X and Y and defines a shrink animation
Player.prototype.act = function(step, level, keys) { 
	this.moveX(step, level, keys); 
	this.moveY(step, level, keys); 
 
	var otherActor = level.actorAt(this); 
	if (otherActor) 
		level.playerTouched(otherActor.type, otherActor);
	
	if(level.status == 'lost')
	{
		this.pos.y += step;
		this.size.y -= step;
	}
}; 
 
//checks for what the player touched. if it's lava, the player dies and the status is set to lost.
//if it's a collectible, it disappears. if you collect them all, then the status is set to won and the level advances
//else if it's a gravity pickup, does a setTimeout for gravity being reduced for 5 seconds.
Level.prototype.playerTouched = function(type, actor) {
	
	if(type == 'lava' && this.status == null)
	{
		this.status = 'lost';
		this.finishDelay = 1.5;
		deathCount++;
	}
	
	else if(type == 'coin')
	{
		this.actors = this.actors.filter(function(other) {
			return other != actor; 
		}); 
		
		if(!this.actors.some(function(actor){
			return actor.type == 'coin';
		})) {
			this.status = 'won ';
			this.finishDelay = 1.5;
		}
		
		gameHud(this);
	}
	
	else if(type == 'pickUp')
	{
		this.actors = this.actors.filter(function(other) {
			return other != actor; 
		});
		
		gravity = 5;
		setTimeout(function() {
			gravity = 25;
		}, 5000);
		
	}
	
	
};



//arrow key codes
var arrowCodes = {37: "left", 38: "up", 39: "right"};

//translate the codes pressed from a key event
function trackKeys(codes) {

	var pressed = Object.create(null);


function handler(event) {
	if (codes.hasOwnProperty(event.keyCode)) {

		var down = event.type == "keydown";
		pressed[codes[event.keyCode]] = down;
		event.preventDefault();
    }
}
	addEventListener("keydown", handler);
	addEventListener("keyup", handler);
	return pressed;
}


function runAnimation(frameFunc) {
	var lastTime = null;
	function frame(time) {
    var stop = false;
    if (lastTime != null) {

		var timeStep = Math.min(time - lastTime, 100) / 1000;
		stop = frameFunc(timeStep) === false;
    }
    lastTime = time;
    if (!stop)
      requestAnimationFrame(frame);
  }
  requestAnimationFrame(frame);
}

//assigns the array that will be updated anytime the player presses an arrow key
var arrows = trackKeys(arrowCodes);

//this is going to run a single level and clear it when finished
function runLevel(level, Display, andThen) {
	var display = new Display(document.body, level);

	runAnimation(function(step) {
    
		level.animate(step, arrows);
		display.drawFrame(step);
		
		if(level.isFinished())
		{
			display.clear();
			if(andThen)
				andThen(level.status);
			return false;
		}
	});
	
	if(deathCount == 0) gameHud(level);
	gameHud(level);
}


function runGame(plans, Display) {
  function startLevel(n) {
  
    //create a new level using the nth element of array plans
    runLevel(new Level(plans[n]), Display, function(status) {
		
		
		if(status == 'lost')
		{
			coinCount = 0;
			startLevel(n);
		}
				
		else if(n < plans.length - 1)
		{
			startLevel(n + 1);
		}
		else
		{
			
			setTimeout(function(){
				var winState = elt('div', 'backWin');
				winState.style.height = '700px';
				winState.style.width = '1000px';
				winState
				document.body.appendChild(winState);
				console.log('nice job.');
			}, 700);

		}	
	
	});
  }
  startLevel(0);
}

