class FantasmaAmarillo{
    constructor(x, y){
        this.x = x;
        this.y = y;
        this.dir = 0;
        this.r = 255;
        this.g = 255;
        this.b = 0;
        // 0 es hacia arriba 1 es hacia abajo
    }
    mostrar(){
        fill(this.r, this.g, this.b);
        //255,255,0
        rectMode(CENTER);
        rect(this.x, this.y, 50, 50);
        rectMode(CORNER); 
        this.especial();       
    }

    especial(){
        this.saltar();
    }

    saltar(){
        if(this.y>400){
            this.y = 0; 
        }
    }
    mover(){
        if(this.dir === 0){            
            this.y--;
        }
    }
}