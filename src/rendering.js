class Rendering{
    constructor(context){
        this.ctx = context;
    }
    drawObjet(objet){
        this.ctx.fillStyle = objet.color;
        this.ctx.fillRect(objet.x,objet.y,objet.height,objet.width);
    }
    drawObjets(objets){
        objets.forEach(function(objet) {
            this.drawObjet(objet);
        }, this);
    }
}
