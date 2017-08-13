let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');
let physics = new Physics();
let rendering = new Rendering(ctx);
let x = 10;
let y = 10;
let thicknessX = 40;
let thicknessY = 20;
let objet = new Objet(x,y,thicknessX,thicknessY)
let objet2 = new Objet(Math.floor(Math.random()*(canvas.width-10)),Math.floor(Math.random()*(canvas.height-10)),10,10);
let objets = [objet,objet2];

function update(){

    // if(physics.borderX(objet,canvas)){
    //     objet.vx *= -1;
    // }

    // if(physics.borderY(objet,canvas)){
    //     objet.vy *= -1;
    // }
    if(physics.collisionRect(objet,objet2)){
         objet2.color = 'red';
    }
    
    objet.x += objet.vx;
    objet.y += objet.vy;

}

function draw(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
    rendering.drawObjets(objets);
}

function loop(){
    draw();
    update();
}

document.addEventListener('keydown',(e) => {
    if(e.key == 'w'){
        objet.vy = -5;
    }
    if(e.key == 's'){
        objet.vy = 5;@
    }
    if(e.key == 'd'){
        objet.vx = 5;
    }
    if(e.key == 'a'){
        objet.vx = -5;
    }
})
document.addEventListener('keyup',(e) => {
    if(e.key == 'w'){
        objet.vy = 0;
    }
    if(e.key == 's'){
        objet.vy = 0;
    }
    if(e.key == 'd'){
        objet.vx = 0;
    }
    if(e.key == 'a'){
        objet.vx = 0;
    }
})
setInterval(loop, 10);