/*
    Player.js
*/


class Player extends Entity {
  constructor(position){
    super(position);
  };


  /*
      Draw
  */

  draw(context){
    const { position , rotation } = this;
    const [ x , y ] = position.axis;

    let angle = Math.PI;

    if(rotation > 0)
      angle = Math.PI * ((rotation - 1) * 0.25 - 0.5);

    angle -= Math.PI * 0.5;

    // ⵠ.log(angle,x,y,this.rotation);

    context.strokeStyle = 'black';
    context.lineWidth = 5;
    context.beginPath();
    context.arc(x,y,25,angle + Math.PI * 0.12,angle + Math.PI * 1.87)
    context.arc(x,y,25,angle + Math.PI * 1.87,angle - Math.PI * 0.12)
    context.stroke();
  };
};

finish('entity/general/Player.js');
