/*
    Door.js
*/


class Door extends Entity {
  constructor(key,color){
    super('door');
    this.key = key;
    this.solid = true;
    this.color = color;
    this.interactive = true;
  };


  /*
      Draw
  */

  draw(context){
    const
      { position , rotation } = this,
      [ x , y ] = position.axis;

    context.beginPath();
    context.fillStyle = this.color;
    context.rect(x * 50 - 25,y * 50 - 25,50,50);
    context.fill();
  };


  /*
      Use
  */

  use(){
    if(DeltaDungeon.keys.includes(this.key))
      this.despawn();
  };
}


finish('entity/interactive/Door.js');
