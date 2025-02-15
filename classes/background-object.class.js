class backgroundObject extends movableObject{

    width= 720;
    height= 480;

    constructor(img, x){
        super().loadImage(img);
        this.x = 0;
        this.y = 480 - this.height;

    }
}