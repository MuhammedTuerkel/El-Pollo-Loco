class movableObject{
    x ;
    y;
    img;
    height;
    width;

    loadImage(path, x, y){
        this.img = new Image();
        this.img.src = path;
        this.x = x;
        this.y = y;
    }

    moveRight(){

    }

    moveLeft(){
    
    }
}