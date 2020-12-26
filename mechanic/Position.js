/*
    Position.js
*/


class Position {

  constructor(...axis){
    this.axis = axis;
  };


  /*
      Modify
  */

  modify(modifier){
    this.axis = modifier(...this.axis);
  };


  /*
      Id
  */

  id(){
    return this.axis.join(':');
  };
};

finish('mechanic/Position.js');
