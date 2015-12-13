	//global variables are here
	var canvas;
	var context;
	var shapes = [];

	
	//uses the x and y coordinates, the type, and a random number being passed through to determine the shape
	function Shape(x, y, type, num) {
	
		//if the random number is 1 it's gonna be a circle 
		if(num == 1)
		{
			this.x = x;
			this.y = y;
			this.type = type;
			this.r = 10;
			this.num = num;
			this.c1 = Math.floor(Math.random()*255 + 1);
			this.c2 = Math.floor(Math.random()*255 + 1);
			this.c3 = Math.floor(Math.random()*255 + 1);
			this.dx = Math.random() * 30 - 15;
			this.dy = Math.random() * 30 - 15;
		}
		
		//if the random number is 1 it's gonna be a square
		else if(num == 2)
		{
			this.x = x;
			this.y = y;
			this.type = type;
			this.width = 7;
			this.height = 7;
			this.num = num;
			this.c1 = Math.floor(Math.random()*255 + 1);
			this.c2 = Math.floor(Math.random()*255 + 1);
			this.c3 = Math.floor(Math.random()*255 + 1);
			this.dx = Math.random() * 30 - 15;
			this.dy = Math.random() * 30 - 15;
		}
		
		//if the random number is 3 it's gonna be a shape defined later on 
		else if(num == 3)
		{
			this.x = x;
			this.y = y;
			this.type = type;
			this.num = num;
			this.c1 = Math.floor(Math.random()*255 + 1);
			this.c2 = Math.floor(Math.random()*255 + 1);
			this.c3 = Math.floor(Math.random()*255 + 1);
			this.dx = Math.random() * 30 - 15;
			this.dy = Math.random() * 30 - 15;
		}
		
		//if the random number is 4 it's gonna end up being interesting with random sides being throw in
		else if(num == 4)
		{
			this.x = x;
			this.y = y;
			this.type = type;
			this.num = num;
			this.side = Math.floor(Math.random() * 10);
			this.side2 = Math.floor(Math.random() * 20 - 1);
			this.side3 = Math.floor(Math.random() * 5 - 10);
			this.side4 = Math.floor(Math.random() * 15 + 5);
			this.side5 = Math.floor(Math.random() * 9 - 2);
			this.side6 = Math.floor(Math.random() * 16 + 2);
			this.c1 = Math.floor(Math.random()*255 + 1);
			this.c2 = Math.floor(Math.random()*255 + 1);
			this.c3 = Math.floor(Math.random()*255 + 1);
			this.dx = Math.random() * 25 - 10;
			this.dy = Math.random() * 25 - 10;
		}
		
		//if the number is 5 or 6 they also get defined later on
		else if(num == 5)
		{
			this.x = x;
			this.y = y;
			this.type = type;
			this.num = num;
			this.c1 = Math.floor(Math.random()*255 + 1);
			this.c2 = Math.floor(Math.random()*255 + 1);
			this.c3 = Math.floor(Math.random()*255 + 1);
			this.dx = Math.random() * 10 - 5;
			this.dy = Math.random() * 10 - 5;
		}
		
		else if(num == 6)
		{
			this.x = x;
			this.y = y;
			this.type = type;
			this.num = num;
			this.c1 = Math.floor(Math.random()*255 + 1);
			this.c2 = Math.floor(Math.random()*255 + 1);
			this.c3 = Math.floor(Math.random()*255 + 1);
			this.dx = Math.random() * 25 - 10;
			this.dy = Math.random() * 25 - 10;
		}
	}
	  
    function init() {
		
		//declare the canvas and context
		canvas = document.getElementById('canvas');
        context = canvas.getContext("2d");
		
		//add event listeners for resizes and orientation changes
        window.addEventListener('resize', resizeCanvas, false);
        window.addEventListener('orientationchange', resizeCanvas, false);
        resizeCanvas();
		
		//add listeners for click and mouse moveing
		canvas.onclick = function(event) {
			handleClick(event.clientX, event.clientY);
		};
		
		canvas.addEventListener('mousemove', function(e){
			getMousePos(e.clientX, e.clientY);
		
		}, false);
		
		
		setInterval(resizeCanvas, 30);
		/*extra something different. change the setInterval above to call handleClick instead. then on line 210 uncomment
		the drawText(); call, and comment out the drawText(); function call on line 349. makes for an interesting show		
		*/
		
		
    }
	
	//uses the mouses position on where the shapes spawn at. basically what happens when the action listener for
	//mousemove is fired off is in here.
	function getMousePos(x, y) {
		
		//set the type to xor and passed the deciding random number for each shape to be added
		var type = 'xor';
		var num = Math.floor(Math.random() * 6 + 1);
		//var num = 5;
		
		shapes.push(new Shape(x, y, type, num));
		
		for(var i = 0; i < shapes.length; i++)
		{
			drawShape(shapes[i]);
		}
		
	}
	
	
	//set some variables to keep track of the slight rotation for the text
	var start = 0;
	var startShape = 0;
	var movingUp = false;
	
	
	function drawText() {
				
		//save before rotation and set the font and size
		context.save();
		context.font = '30px Jokerman';
		context.translate(canvas.width/3, canvas.height/2);
		
		//this if statement keeps track of it's upward movement. then the else if manages it's downward movement.
		//each of them monitor when it gets to a certain position to sort of "bounce" and go the other way
		if(movingUp == false)
		{
			context.rotate(0.005*start++);
			if(start == 50) movingUp = true;
			context.fillText('The Trials of Patience', 0, 0);
			context.fillText('This game is tough.', 0, 35);
		}
		else if(movingUp == true)
		{
			context.rotate(0.005*start--);
			if(start == -50) movingUp = false;
			context.fillText('The Trials of Patience', 0, 0);
			context.fillText('Patience is recommended. A lot of it.', -100, 35);
		}
		
		//context.fillText('Move the mouse to create, click to dissappear!', 0, 0);
		context.textAlign = 'center';
		context.textBaseLine = 'middle';
		context.restore();
		
	
	}
	
	//this is going to handle the clicks. basically it's going to check an area around it and if shapes in the array
	//are in that area it's going to delete them from the array.
	function handleClick(x, y) {
	    var found = false;
		for (var i = 0; i < shapes.length; i++) {
			d = Math.sqrt((shapes[i].x - x) * (shapes[i].x - x) + (shapes[i].y - y) * (shapes[i].y - y));
			if (d <= 250) {
				shapes.splice(i, 1);
				found = true;
			}
		}
		//drawText();
		//for version 2 uncomment the text above

	}
	function drawShape(shape) {
	
	//in this function it's going to check the number passed into the num part of the shape object to check
	//what shape it's going to be. throughout each of the shapes they all have a random color that will be
	//generated from the shape c1, c2, and c3 colors that are random rgb values being passed in
		if(shape.num == 1)
		{
			//making a circle to be put in the display, keeping within bounds by the if statement
			//and reversing velocity if it hits the edge
			context.beginPath();
			context.globalCompositeOperation = shape.type;
			context.arc(shape.x, shape.y, shape.r, 0, degreesToRadians(360), true);
			context.fillStyle = 'rgb('+shape.c1+', '+shape.c2+', '+shape.c3+')';
			context.fill();
			if (shape.x + shape.dx > canvas.width || shape.x + shape.dx < 0)
				shape.dx = -shape.dx;
			if (shape.y + shape.dy > canvas.height || shape.y + shape.dy < 0)
				shape.dy = -shape.dy;
			shape.x += shape.dx;
			shape.y += shape.dy;
		}
		
		else if(shape.num == 2)
		{
			//making a small square to be added to the display, keeping within bounds by the if statement
			//and reversing velocity if it hits the edge
			context.beginPath();
			context.globalCompositeOperation = shape.type;
			context.rect(shape.x, shape.y, shape.width, shape.height);
			context.fillStyle = 'rgb('+shape.c1+', '+shape.c2+', '+shape.c3+')';
			context.fill();
			if (shape.x + shape.dx > canvas.width || shape.x + shape.dx < 0)
				shape.dx = -shape.dx;
			if (shape.y + shape.dy > canvas.height || shape.y + shape.dy < 0)
				shape.dy = -shape.dy;
			shape.x += shape.dx;
			shape.y += shape.dy;
		}
		
		else if(shape.num == 3)
		{
			//makes a triangle to be added to the display, keeping within bounds by the if statement
			//and reversing velocity if it hits the edge
			context.beginPath();
			context.globalCompositeOperation = shape.type;
			context.moveTo(shape.x, shape.y);
			context.lineTo(shape.x + 5, shape.y + 10);
			context.lineTo(shape.x - 15, shape.y + 15);
			context.fillStyle = 'rgb('+shape.c1+', '+shape.c2+', '+shape.c3+')';
			context.fill();
			if (shape.x + shape.dx > canvas.width || shape.x + shape.dx < 0)
				shape.dx = -shape.dx;
			if (shape.y + shape.dy > canvas.height || shape.y + shape.dy < 0)
				shape.dy = -shape.dy;
			shape.x += shape.dx;
			shape.y += shape.dy;
		}
		
		else if(shape.num == 4)
		{
			//decided to let a random number generator make this shape. it's pretty much random lines that get filled
			context.beginPath();
			context.globalCompositeOperation = shape.type;
			context.moveTo(shape.x, shape.y);
			context.lineTo(shape.x + shape.side, shape.y + shape.side2);
			context.lineTo(shape.x - shape.side3, shape.y + shape.side4);
			context.lineTo(shape.x - shape.side5, shape.y + shape.side6);
			context.fillStyle = 'rgb('+shape.c1+', '+shape.c2+', '+shape.c3+')';
			context.fill();
			if (shape.x + shape.dx > canvas.width || shape.x + shape.dx < 0)
				shape.dx = -shape.dx;
			if (shape.y + shape.dy > canvas.height || shape.y + shape.dy < 0)
				shape.dy = -shape.dy;
			shape.x += shape.dx;
			shape.y += shape.dy;
		}
		
		else if(shape.num == 5)
		{
			//this is the cresent moon shape i added that has also has the same as the rest edge collision
			context.beginPath();
			context.globalCompositeOperation = shape.type;
			context.moveTo(shape.x, shape.y);
			context.bezierCurveTo(shape.x, shape.y+20, shape.x+40, shape.y+20, shape.x+40, shape.y);
			context.quadraticCurveTo(shape.x+20, shape.y+20, shape.x, shape.y);
			context.fillStyle = 'rgb('+shape.c1+', '+shape.c2+', '+shape.c3+')';;
			context.lineWidth = 5;
			context.fill();
			if (shape.x + shape.dx > canvas.width || shape.x + shape.dx < 0)
				shape.dx = -shape.dx;
			if (shape.y + shape.dy > canvas.height || shape.y + shape.dy < 0)
				shape.dy = -shape.dy;
			shape.x += shape.dx;
			shape.y += shape.dy;
		}
		else if(shape.num == 6)
		{
			//i added this shape in that distorted the crescent shape to look sort of like a fairy from legend of zelda
			//i had to keep it for that obvious reason. also has edge collision like the rest
			context.beginPath();
			context.globalCompositeOperation = shape.type;
			context.moveTo(shape.x, shape.y);
			context.bezierCurveTo(shape.x, shape.y+20, shape.x+40, shape.y+20, shape.x+40, shape.y);
			context.quadraticCurveTo(shape.x+20, shape.y+20, shape.x+30, shape.y+30);
			context.fillStyle = 'rgb('+shape.c1+', '+shape.c2+', '+shape.c3+')';
			context.lineWidth = 5;
			context.lineCap = 'round';
			context.fill();
			if (shape.x + shape.dx > canvas.width || shape.x + shape.dx < 0)
				shape.dx = -shape.dx;
			if (shape.y + shape.dy > canvas.height || shape.y + shape.dy < 0)
				shape.dy = -shape.dy;
			shape.x += shape.dx;
			shape.y += shape.dy;
		}
		
	}
	
	//this function keeps track of the canvas that covers the screen. if it gets resized at any point, then any
	//shapes off the screen get spliced 
    function resizeCanvas() {
	
		//fill the entire screen by making the canvas the size of the inner window
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
		fillBackgroundColor();
		
		//since im calling this function in a setInterval time frame I have to keep having the shapes redrawn to animate
		for (var i = 0; i < shapes.length; i++) {
			drawShape(shapes[i]);
			if(shapes[i].x > canvas.width || shapes[i].y > canvas.height)
			{
				shapes.splice(i, 1);
			}
		}
		drawText();
		//for version 2 comment out the above draw text function
		
    }
	
	//just fills the background with black. works well with the color global Composite Operation of xor I give each shape
	function fillBackgroundColor() {
		
		context.globalCompositeOperation = 'xor';
		context.fillStyle = 'black';
		context.fillRect(0, 0, canvas.width, canvas.height);
	}
	
	//helper function
	function degreesToRadians(degrees) {
		
		//converts from degrees to radians and returns
		return (degrees * Math.PI)/180;
	}
	
	//once it loads the window call function init
window.onload = init;