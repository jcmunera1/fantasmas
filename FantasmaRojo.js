class FantasmaRojo {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.dir = 0;
        this.r = 255;
        this.g = 0;
        this.b = 0;
        // 0 es hacia arriba 1 es hacia abajo
    }
    mostrar() {
        fill(this.r, this.g, this.b);
        rectMode(CENTER);
        rect(this.x, this.y, 50, 50);
        rectMode(CORNER);        
    }

    especial() {
        if (frameCount % 90 == 0) {
            this.cambiarDeDireccion();
        }
    }

    cambiarDeDireccion() {
        this.dir = int(random(4));
    }
    mover() {
        switch (this.dir) {
            case 0:
                this.y--;
                break;
            case 1:
                this.y++;
                break;
            case 2:
                this.x++;
                break;
            case 3:
                this.x--;
                break;
        }
    this.especial();
    }
}