/*
    Position.js
*/


class Position {

  static toId(axis = []){
    return axis.join(':');
  };


  constructor(world,...axis){
    this.world = world;
    this.axis = axis;
  };


  /*
      Id
  */

  id(){
    return Position.toId(this.axis);
  };


  /*
      Entities
  */

  entities(){
    const { entities } = this.world;
    return entities.get(this.id()) || [];
  };


  /*
      Relative
  */

  relative(direction = 0,distance = 1){
    const
      { moves } = DeltaDungeon,
      { axis , world } = this,
      transformed = axis
        .add(moves[direction]);

    return new Position(this.world,...transformed);
  };
};

finish('mechanic/Position.js');
