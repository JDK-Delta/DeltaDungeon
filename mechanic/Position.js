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
};

finish('mechanic/Position.js');
