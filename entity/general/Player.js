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
    const
      { position , rotation } = this,
      [ x , y ] = position.axis,
      angle = rotation ? rotation * 0.25 + 0.75 : 0.5,
      angles = [0.12,-0.12]
        .add(angle)
        .multiply(Math.PI);

    context.strokeStyle = 'white';
    context.lineWidth = 5;
    context.beginPath();
    context.arc(x,y,25,...angles);
    context.stroke();
  };
};

finish('entity/general/Player.js');
