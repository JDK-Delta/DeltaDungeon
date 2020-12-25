/*
    Entity.js
*/


class Entity {

  constructor(position){
    this.position = position;
    this.rotation = 0;
  };


  /*
      Move
  */

  move(ⵠx,ⵠy){
    this.position.modify((x,y) => [
      x + ⵠx,
      y + ⵠy
    ]);
  };


  /*
      Draw
  */

  draw(context){
    console.log('empty context');
  };
}

finish('entity/Entity.js');
