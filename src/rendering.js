class Rendering{
    constructor(context){
        this.ctx = context;
    }
    drawObjet(objet){
        this.ctx.fillStyle = objet.color;
        this.ctx.fillRect(objet.x,objet.y,objet.height,objet.width);
    }
    drawObjetWithImage(objet,image,sx,sy,sh,sw){
        this.ctx.drawImage(image,sx,sy,sh,sw,objet.x,objet.y,objet.height,objet.width);
        //(img,Math.floor(i)*88,0,88,88,objet.x,objet.y,40,40);
    }
    drawObjets(objets){
        objets.forEach(function(objet) {
            this.drawObjet(objet);
        }, this);
    }
    
    
}
