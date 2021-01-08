/*
    Player.js
*/


class Player extends Entity {
  constructor(position){
    super('player',position);
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
    context.arc(x * 50,y * 50,20,...angles);
    context.stroke();
  };


  /*
      Use
  */

  use(){
    const { position } = this;

    /*  On Top  */

    {
      const usable = position
        .entities()
        .filter((entity) => entity !== this)
        .first();

      if(usable){
        usable.use();
        return;
      }
    }


    /*  In Front  */

    {
      const front = position
        .relative(this.rotation)
        .entities()
        .filter(({ interactive }) => interactive)
        .first();

      if(front)
        front.use();
    }
  };
};

finish('entity/general/Player.js');
