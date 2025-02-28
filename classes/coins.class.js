class coin extends movableObject{
    width = 125;
    height = 125;
    

    constructor(img, x){
        super().loadImage(img);
    this.x = x;
        this.y =300;
    }
}