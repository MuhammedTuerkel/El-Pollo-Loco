class backgroundObject extends movableObject{

    width= 720;
    height= 480;

    constructor(img, x){
        super().loadImage(img, x);
        this.y = 480 - this.height;

    }
}