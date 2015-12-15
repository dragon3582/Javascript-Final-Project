
	var cog = new Image();
	var theCanvas;
	var ctx;
	function init() {
		theCanvas = document.getElementById('myCanvas');
		ctx = theCanvas.getContext("2d");
		cog.src = 'gear.png'; 
		setInterval(fillResize,10);
	}
	
	var rotation = 0;
	
	function draw(){
		ctx.globalCompositeOperation = 'source-over';
		ctx.translate(theCanvas.width-400, theCanvas.height-260);
		ctx.save();
		ctx.translate(128,128); // to get it in the origin
		rotation += 1;
		ctx.rotate(rotation*Math.PI/200); //rotate in origin
		ctx.translate(-128,-128); //put it back
		ctx.drawImage(cog,0,0);
		if(rotation == 400) rotation = 0;
		ctx.restore();
	}
	
	function fillResize(){
	
		theCanvas.width = window.innerWidth;
		theCanvas.height = window.innerHeight;
		ctx.fillStyle = 'black';
		ctx.fillRect(0, 0, theCanvas.width, theCanvas.height);
		draw();
		drawTheText();
	}
	
	function drawTheText()
	{
		
		var loadText = "LOADING";
		var grad = ctx.createLinearGradient(-100, 0, 50, 0);
		
		grad.addColorStop(0, 'red');
		grad.addColorStop(.5, 'orange');
		grad.addColorStop(1, 'white');
		

		ctx.fillStyle = grad;
		ctx.font = "40px Impact";
		ctx.fillText(loadText,  -120, 200);	
	}


	