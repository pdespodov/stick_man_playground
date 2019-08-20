var canvas = document.getElementById("canvas");
context = canvas.getContext("2d"); // get Canvas Context object
let timestamp = Date.now();
let wave = false;
let moveLeftLeg = false;

draw();

function draw() {
    if(Date.now() < (timestamp+350)) 
        return requestAnimationFrame(draw);
    
    context.clearRect(0, 0, window.innerWidth, window.innerHeight);
    context.beginPath();
    context.fillStyle = "black"; // #000000
    context.arc(200, 50, 30, 0, Math.PI * 2, true);
    context.fill(); //fill the circle  

    context.beginPath(); 
    context.lineWidth = 6;
    context.stroke();

    //body
    context.beginPath();
    context.moveTo(200, 80);
    context.lineTo(200, 180);
    context.strokeStyle = "black";
    context.stroke();

    //arms
    context.beginPath();
    context.strokeStyle = "black";
    context.moveTo(200, 100);
    context.lineTo(150, 130);
    
    if(wave) { 
        context.moveTo(200, 100);
        context.lineTo(250, 130);
        wave = false;
    }
    else {
        context.moveTo(200, 100);
        context.lineTo(250, 70);
        wave = true;
    }
    
    context.stroke();

    //legs
    context.beginPath();
    context.strokeStyle = "black";
    //context.moveTo(200, 180);
    //context.lineTo(150, 280);
    if(moveLeftLeg) { 
        context.moveTo(200, 180);
        context.lineTo(150, 280);
        moveLeftLeg = false;
    }
    else {
        context.moveTo(200, 180);
        context.lineTo(100, 260);
        moveLeftLeg = true;
    }
    context.moveTo(200, 180);
    context.lineTo(250, 280);
    
    context.stroke();
    timestamp = Date.now();
    requestAnimationFrame(draw);
}