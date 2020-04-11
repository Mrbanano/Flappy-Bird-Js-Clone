//SELECT CVS
const cvs = document.getElementById("game-canvas");
const ctx = cvs.getContext("2d");

//GAME VARS AND CONST
let frames= 0;

//LOAD SPRITE IMAGE
const sprite = new Image();
sprite.src = "img/sprite.png";

//BACKGROUND

const bg = {
    sX : 0,
    sY : 0,
    w : 275,
    h : 226,
    x : 0,
    y : cvs.height - 226,
    
    draw : function(){
        ctx.drawImage(sprite, this.sX, this.sY, this.w, this.h, this.x, this.y, this.w, this.h);
        
        ctx.drawImage(sprite, this.sX, this.sY, this.w, this.h, this.x + this.w, this.y, this.w, this.h);
    }
    
}





//DRAW
function draw(){ 
    ctx.fillStyle="rgba(112, 197, 206,0.5)"; 
    ctx.fillRect(0,0,cvs.width,cvs.height)
    bg.draw();
}
//UPDATE
function update(){

}
//LOOP
function loop(){

    update();
    draw();
    frames ++
    requestAnimationFrame(loop);
   
}

loop();
