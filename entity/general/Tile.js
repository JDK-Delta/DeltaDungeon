/*
    Tile.js
*/


class Tile extends Entity {

  constructor(...args){
    super('tile',...args);
    this.solid = true;
    this.neighbours = [];
  };


  /*
      Draw
  */

  draw(context){
    const
      { position , neighbours } = this,
      [ x , y ] = position.axis.multiply(50);


    context.fillStyle = 'white';

    const { '0:-1': up , '1:0': right , '0:1': down , '-1:0': left } = neighbours;

    if(up && right && left && down || !(
      up && right && !down && !left ||
      up && left && !down && !right ||
      down && right && !up && !left ||
      down && left && !up && !right ||
      down && !left && !right && !up ||
      up && !left && !right && !down ||
      left && !down && !right && !up ||
      right && !left && !down && !up
    )){
      context.beginPath();
      context.rect(x - 15,y - 15,30,30);
      context.fill();
    };

    if(!up && !right && !left && !down){
      context.beginPath();
      context.arc(x,y,25,0,Math.PI * 2);
      context.fill();
    };


    if(up && right && !left && !down){
      context.beginPath();
      context.moveTo(x + 15,y - 15);
      context.arc(x + 15,y - 15,30,Math.PI * .5,Math.PI);
      context.closePath();
      context.fill();
    };


    if(up && left && !right && !down){
      context.beginPath();
      context.moveTo(x - 15,y - 15);
      context.arc(x - 15,y - 15,30,0,Math.PI * .5);
      context.closePath();
      context.fill();
    };

    if(down && right && !left && !up){
      context.beginPath();
      context.moveTo(x + 15,y + 15);
      context.arc(x + 15,y + 15,30,Math.PI * 1,Math.PI * 1.5);
      context.closePath();
      context.fill();
    };


    if(down && left && !right && !up){
      context.beginPath();
      context.moveTo(x - 15,y + 15);
      context.arc(x - 15,y + 15,30,Math.PI * 1.5,Math.PI * 2);
      context.closePath();
      context.fill();
    };


    /*
        ==+
            |
        ==+
    */


    if(down && !left && !right && !up){
      context.beginPath();
      context.rect(x - 15,y,30,15);
      context.moveTo(x,y);
      context.arc(x,y,15,Math.PI,0);
      context.closePath();
      context.fill();
    };

    if(up && !left && !right && !down){
      context.beginPath();
      context.rect(x - 15,y - 15,30,15);
      context.moveTo(x,y);
      context.arc(x,y,15,0,Math.PI);
      context.closePath();
      context.fill();
    };

    if(left && !up && !right && !down){
      context.beginPath();
      context.rect(x - 15,y - 15,15,30);
      context.moveTo(x,y);
      context.arc(x,y,15,Math.PI * 1.5,Math.PI * .5);
      context.closePath();
      context.fill();
    };

    if(right && !up && !left && !down){
      context.beginPath();
      context.rect(x,y - 15,15,30);
      context.moveTo(x,y);
      context.arc(x,y,15,Math.PI * .5,Math.PI * 1.5);
      context.closePath();
      context.fill();
    };



    if(up){
      context.rect(x - 15,y - 25,30,10);
      context.fill();
    };

    if(right){
      context.rect(x + 15,y - 15,10,30);
      context.fill();
    };

    if(down){
      context.rect(x - 15,y + 15,30,10);
      context.fill();
    };

    if(left){
      context.rect(x - 25,y - 15,10,30);
      context.fill();
    };


    if(up && left){
      context.moveTo(x - 25,y - 15);
      context.beginPath();
      context.arc(x - 25,y - 25,10,0,.5 * Math.PI);
      context.lineTo(x - 15,y - 15);
      context.closePath();
      context.fill();
    };

    if(up && right){
      context.moveTo(x + 25,y - 15);
      context.beginPath();
      context.arc(x + 25,y - 25,10,.5 * Math.PI,Math.PI);
      context.lineTo(x + 15,y - 15);
      context.closePath();
      context.fill();
    };

    if(down && left){
      context.moveTo(x - 25,y + 15);
      context.beginPath();
      context.arc(x - 25,y + 25,10,Math.PI * 1.5,Math.PI * 2);
      context.lineTo(x - 15,y + 15);
      context.closePath();
      context.fill();
    };

    if(down && right){
      context.moveTo(x + 25,y + 15);
      context.beginPath();
      context.arc(x + 25,y + 25,10,Math.PI,Math.PI * 1.5);
      context.lineTo(x + 15,y + 15);
      context.closePath();
      context.fill();
    };
  };


  /*
      Neighbour
  */

  neighbour(tile,position,add = true){
    const rel = this.position
      .difference(position);

    this.neighbours[rel.join(':')] = add ? tile : null;
    tile.neighbours[rel.negate().join(':')] = add ? this : null;
  };
}


finish('entity/general/Tile.js');
