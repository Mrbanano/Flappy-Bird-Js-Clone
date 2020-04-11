//SELECT CVS
const cvs = document.getElementById("game-canvas");
const ctx = cvs.getContext("2d");

//GAME VARS AND CONST
let frames= 0;

//LOAD SPRITE IMAGE
const Sprite = new Image();
Sprite.scr ="./src/img/sprite.png"

var bird = new Image()
bird.src = "./src/img/sprite.png"

//BACKGROUND
const bg = {
    sX:0,
    sY:0,
    w:275,
    h:226,
    x:0,
    y:cvs.height -226,
    draw : function(){
        
        ctx.drawImage(Sprite,this.sX,this.sY,this.w,this.h,this.x,this.y,this.w,this.h);
       
        //ctx.drawImage(bg,0,0,cvs.width,cvs.height);
        
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
