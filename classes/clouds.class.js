 class clouds extends movableObject{
    width = 600;
    height = 250;


constructor(img){
super().loadImage(img);
this.y = 10;
this.x= Math.random() * 200;
}
 }