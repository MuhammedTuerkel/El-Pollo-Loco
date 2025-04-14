class backgroundObject extends movableObject{
    width= 720;
    height= 480;
    
/** * Load the Background Images as a Image Like: <img src="img"></img> */
    constructor(img, x){
        super().loadImage(img, x);
        this.y = 480 - this.height;
    }
}