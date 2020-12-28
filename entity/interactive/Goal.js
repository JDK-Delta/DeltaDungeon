/*
    Goal.js
*/


class Goal extends Entity {

  constructor(){
    super('goal');

    this.interactive = true;
    this.solid = true;
    this.anim = 1;
  };


  /*
      Draw
  */

  draw(context){
    this.rotation += this.anim;

    if(this.rotation > 9 || this.rotation < 1)
      this.anim = - this.anim;

    const
      { position , rotation } = this,
      [ x , y ] = position.axis;

    context.beginPath();
    context.fillStyle = '#FF6DD3';
    context.rect(x * 50 - 20 + rotation,y * 50 - 20 + rotation,40 - rotation * 2,40 - rotation * 2);
    context.fill();
  };


  /*
      Use
  */

  use(){
    DeltaDungeon.finish();
  };
}


finish('entity/interactive/Door.js');
