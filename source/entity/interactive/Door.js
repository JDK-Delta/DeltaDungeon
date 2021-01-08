/*
    Door.js
*/


class Door extends Entity {
  constructor(key,color,rotation){
    super('door');
    this.key = key;
    this.solid = true;
    this.color = color;
    this.interactive = true;
    this.rotation = rotation;
  };


  /*
      Draw
  */

  draw(context){
    const { position , rotation } = this;
    let [ x , y ] = position.axis;

    x *= 50;
    y *= 50;

    context.beginPath();
    context.fillStyle = this.color;

    let
      Y = y - 2.5,
      X = x - 40,
      W = 80,
      H = 5;

    if(rotation === 1){
      X = x - 2.5;
      Y = y - 40;
      W = 5;
      H = 80;
    }

    context.rect(X,Y,W,H);

    context.fill();
  };


  /*
      Use
  */

  use(){
    if(Keys.has(this.key))
      this.despawn();
  };
}


finish('entity/interactive/Door.js');
