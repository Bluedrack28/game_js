let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');
let img = new Image();
img.src = 'img/sprite.PNG'
let physics = new Physics();
let rendering = new Rendering(ctx);
let x = 10;
let y = 10;
let thicknessX = 40;
let thicknessY = 40;
let objet = new Objet(x,y,thicknessX,thicknessY)
let objet2 = new Objet(Math.floor(Math.random()*(canvas.width-10)),Math.floor(Math.random()*(canvas.height-10)),10,10);
let objets = [objet,objet2];
let i = 0;
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
function attack(){
    ctx.drawImage(img,0,352,88,88,objet.x,objet.y,40,40);
}
function draw(){
    
    //ctx.clearRect(0,0,canvas.width,canvas.height);
    i += 0.1;
    rendering.drawObjetWithImage(objet,img,Math.floor(i)*88,0,88,88);
    //ctx.drawImage(img,Math.floor(i)*88,0,88,88,objet.x,objet.y,40,40);
    if(i >= 4) i = 0;
    //rendering.drawObjets(objets);
}

function loop(){
    draw();
    update();
}

document.addEventListener('keydown',(e) => {
    console.log(e.keyCode);
    if(e.key == 'w'){
        objet.vy = -5;
    }
    if(e.key == 's'){
        objet.vy = 5;
    }
    if(e.key == 'd'){
        objet.vx = 5;
    }
    if(e.key == 'a'){
        objet.vx = -5;
    }
    // 32 = Space
    if(e.keyCode == 32){
        console.log('coucou')
        attack();
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