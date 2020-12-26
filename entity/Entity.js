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
    const pos = this.position.axis;
    const next = pos.add(ⵠ);
    const id = Position.toId(next);
    const { entities } = this.world;

    // console.log('entities',entities);
    entities.forEach(console.log);
    // console.log(...entities.keys());

    // console.log(ⵠ,pos,next);

    const list = entities.get(id) || new Set();

    // console.log(id,list);

    list.forEach((entity) => {
      console.log('type',entity.type);

    });

    console.log('tiles',list.filter((entity) => entity.type === 'tile').length)

    if(list.filter((entity) => entity.type === 'tile').length > 0)
      return;

    const old = entities
    .get(Position.toId(pos))
    if(old)
      old.delete(this);

    list.add(this);
    entities.set(id,list);

    this.position.axis = next;
  };


  /*
      Draw
  */

  draw(context){
    console.log('empty context');
  };
}

finish('entity/Entity.js');
