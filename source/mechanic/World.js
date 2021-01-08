/*
    World.js
*/


class World {

  constructor(){
    this.entities = new Map();
    this.tiles = new Map();
  };


  /*
      Spawn
  */

  spawn(entity,x = 0,y = 0){
    const position = new Position(this,x,y);
    entity.position = position;
    entity.world = this;

    const
      id = position.id(),
      { tiles , entities } = this;

    const set = entities.get(id) || new Set();
    set.add(entity);
    entities.set(id,set);

    if(entity.type === 'tile'){
      tiles.set(id,entity);

      position
      .surrounding()
      .map((pos) => pos.id())
      .forEach((id) => {
        tiles.ⵠGet(id)((tile) => {
          tile.neighbour(entity,position,true);
        });
      });
    }
  };


  /*
      Despawn
  */

  despawn(entity){
    const
      id = entity.position.id(),
      { tiles , entities } = this;

    if(entity.type === 'tile'){
      tiles.delete(id);

      position
      .surrounding()
      .map((pos) => pos.id())
      .forEach((id) => {
        tiles.ⵠGet(id)((tile) => {
          tile.neighbour(entity,position,false);
        });
      });
    }

    entities
    .get(id)
    .delete(entity);
  };
};


finish('mechanic/World.js');
