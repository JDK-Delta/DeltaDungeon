/*
    Entity.js
*/


class Entity {

  constructor(type,position){
    this.position = position;
    this.rotation = 0;
    this.world = null;
    this.type = type;
  };


  /*
      Move
  */

  move(...ⵠ){
    const
      pos = this.position.axis,
      next = pos.add(ⵠ),
      old = Position.toId(pos),
      id = Position.toId(next);

    const
      { entities } = this.world,
      list = entities.get(id);


    /*  Add  */

    if(list){
      if(list.count((entity) => entity.solid) < 1)
        list.add(this);
      else
        return;
    } else {
      entities.set(id,Set.from(this));
    }


    /*  Remove  */

    optional(entities.get(old))((list) => {
      list.delete(this);
    });


    /*  Update  */

    this.position.axis = next;
  };


  /*
      Draw
  */

  draw(context){
    console.log('empty context');
  };


  /*
      Despawn
  */

  despawn(){
    this.world.despawn(this);
  };
};

finish('entity/Entity.js');
