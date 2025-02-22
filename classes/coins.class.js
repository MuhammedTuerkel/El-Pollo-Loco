class coin extends movableObject{
    width = 150;
    height = 150;

    constructor(img, x){
        super().loadImage(img);
    this.x = x;
        this.y =300;
    }
}