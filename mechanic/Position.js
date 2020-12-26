/*
    Position.js
*/


class Position {

  static toId(...axis){
    return axis.join(':');
  };

  constructor(...axis){
    this.axis = axis;
  };


  // /*
  //     Modify
  // */
  //
  // modify(modifier){
  //   this.axis = modifier(...this.axis);
  // };


  /*
      Id
  */

  id(){
    return Position.toId(this.axis);
  };
};

finish('mechanic/Position.js');
