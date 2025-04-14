class Keyboard {
    LEFT;
    RIGHT;
    UP;
    SPACE;
    THROW;

/** * checks the buttons in the mobile version if it is clicked or notclicked */
    bindBtsPressEvents(){
        document.getElementById('arrowleft').addEventListener('touchstart', (e)=>{
            e.preventDefault();
            this.LEFT = true;
        });
        document.getElementById('arrowleft').addEventListener('touchend', (e)=>{
            e.preventDefault();
            this.LEFT = false;
        });
        document.getElementById('arrowright').addEventListener('touchstart', (e)=>{
            e.preventDefault();
            this.RIGHT = true;
        });
        document.getElementById('arrowright').addEventListener('touchend', (e)=>{
            e.preventDefault();
            this.RIGHT = false;
        });
        document.getElementById('arrowup').addEventListener('touchstart', (e)=>{
            e.preventDefault();
            this.SPACE = true;
        });
        document.getElementById('arrowup').addEventListener('touchend', (e)=>{
            e.preventDefault();
            this.SPACE = false;
        });
        document.getElementById('arrowtosing').addEventListener('touchstart', (e)=>{
            e.preventDefault();
            this.THROW = true;
        });
        document.getElementById('arrowtosing').addEventListener('touchend', (e)=>{
            e.preventDefault();
            this.THROW = false;
        });
    }
}