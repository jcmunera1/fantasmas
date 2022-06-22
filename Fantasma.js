constructor(x,y); {
    if(new.target == Fantasma){
       throw new Error("Sorry, this class should not be intantiated"); 
    }
    this.x = x;
    this.y = y;
    this.dir = 0;
    this.r = 0;
    this.g = 0;
    this.g = 0;
}
mostrar(); {
    fill(this.r, this.g, this,b);
    rectMode(CENTER);
    rect(this.x, this.y, 50, 50);
    rectMode(CORNER); 
    this.especial();       
}

// edit the object and update the state bla bla blacklist