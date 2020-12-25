/*
    World.js
*/


class World {

  constructor(){
    this.entities = new Map();
  };


  /*
      Spawn
  */

  spawn(entity,x = 0,y = 0){
    entity.position = new Position(x,y);
    this.entities.set(uuid(),entity);
  };
};


finish('mechanic/World.js');
