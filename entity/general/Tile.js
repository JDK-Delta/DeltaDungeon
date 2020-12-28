/*
    Tile.js
*/


class Tile extends Entity {
  constructor(...args){
    super('tile',...args);
    this.solid = true;
  };


  /*
      Draw
  */

  draw(context){
    const
      { position , rotation } = this,
      [ x , y ] = position.axis;

    context.beginPath();
    context.fillStyle = 'white';
    context.rect(x * 50 - 25,y * 50 - 25,50,50);
    context.fill();
  };
}


finish('entity/general/Tile.js');
