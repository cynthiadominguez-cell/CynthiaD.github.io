function Ship () {
  this.x = 0;
  this.y = 0;
  this.width = 25;
  this.height = 20;
  this.rotation = 0;
  this.showFlame = false;
}

Ship.prototype.draw = function (context) {
var ship = new Image();
ship.src = "Cohete.png";
var naveflama = new Image();
naveflama.src = "Llama.png";

  context.save();
  context.translate(this.x, this.y);
  context.rotate(this.rotation);
  
  context.drawImage(ship, -ship.width/2, -ship.height/2);

  if (this.showFlame) {
    context.drawImage(naveflama, -naveflama.width/2, -naveflama.height/2);

  }
  context.restore();
};
