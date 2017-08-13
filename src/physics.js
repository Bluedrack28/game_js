class Physics {
    constructor() {
        
    }
    borderX(objet,canvas){
        //console.log('borderX');
        if(objet.x <= 0 || objet.x + objet.width >= canvas.width) return true;
        return false;
    }
    borderY(objet,canvas){
        //console.log('borderY');
        if(objet.y <= 0 || objet.y + objet.height >= canvas.height) return true;
        return false;
    }

    collisionRect(objet1,objet2){
        // les collsions ne sont pas bien detectés, il faudrais revoir le fonctionnement. 
        // refaire completement les conditions pour que ca convienne à mon modèle.
        if (objet1.x < objet2.x + objet2.width &&
            objet1.x + objet1.width > objet2.x &&
            objet1.y < objet2.y + objet2.height &&
            objet1.height + objet1.y > objet2.y)  {
            return true;
        }else{
            return false;
        }
    }
}
