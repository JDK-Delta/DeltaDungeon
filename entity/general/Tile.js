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

    const id =
      (up ? '1' : '0') +
      (right ? '1' : '0') +
      (down ? '1' : '0') +
      (left ? '1' : '0');


    const arc = (x,y,radius,start,end) => {
      start *= Math.PI;
      end *= Math.PI;
      context.arc(x,y,radius,start,end);
    };

    const iArc = (rel_x,rel_y,radius,start,end) => {
      rel_x += x;
      rel_y += y;

      context.moveTo(rel_x,rel_y);
      context.beginPath();
      arc(rel_x,rel_y,radius,start,end);
    };

    const oArc = (rel_x,rel_y,radius,start,end) => {
      rel_x += x;
      rel_y += y;

      context.beginPath();
      context.moveTo(rel_x,rel_y);
      arc(rel_x,rel_y,radius,start,end);
    };

    const rect = (rel_x,rel_y,w,h) => {
      context.rect(x + rel_x,y + rel_y,w,h);
    };

    const line = (rel_x,rel_y) => {
      context.lineTo(x + rel_x,y + rel_y);
    };

    const fill = () => context.fill();
    const close = () => context.closePath();


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
      rect(-15,-15,30,30);
      fill();
    };

    if(id === '0000'){
      oArc(0,0,25,0,2);
      fill();
    };


    const edges = {
      '1100': [+1,-1,0.5,1],
      '1001': [-1,-1,0,0.5],
      '0110': [+1,+1,1,1.5],
      '0011': [-1,+1,1.5,2]
    };

    optional(edges[id])(([ x , y , start , end ]) => {
      oArc(x * 15,y * 15,30,start,end);
      close();
      fill();
    });


    /*
        ==+
            |
        ==+
    */


    const roundings = {
      '1000': [0,1,-1,-1,2,1],
      '0100': [.5,1.5,0,-1,1,2],
      '0010': [1,0,-1,0,2,1],
      '0001': [1.5,.5,-1,-1,1,2]
    };

    optional(roundings[id])(([ start , end , x , y , f1,f2]) => {
      oArc(0,0,15,start,end);
      rect(x * 15,y * 15,15 * f1,15 * f2);
      close();
      fill();
    });


    const side = (x,y,w,h) => {
      rect(x,y,w * 10,h * 10);
      fill();
    };

    if(up)
      side(-15,-25,3,1);

    if(right)
      side(15,-15,1,3);

    if(down)
      side(-15,15,3,1);

    if(left)
      side(-25,-15,1,3);


    const corner = (x,y,start,end) => {
      iArc(x * 25,y * 25,10,start,end);
      line(x * 15,y * 15);
      close();
      fill();
    }


    if(up && left)
      corner(-1,-1,0,.5);

    if(up && right)
      corner(1,-1,.5,1);

    if(down && left)
      corner(-1,1,1.5,2);

    if(down && right)
      corner(1,1,1,1.5);
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
