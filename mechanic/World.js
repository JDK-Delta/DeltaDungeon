/*
    World.js
*/

class World {

  #entities = new Map();

  constructor(){

  }


  /*
      Spawn
  */

  spawn(entity){
    this.#entities.set(uuid(),entity);
  };
}
