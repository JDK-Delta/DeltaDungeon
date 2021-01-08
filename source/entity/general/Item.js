/*
    Item.js
*/


class Item extends Entity {


  constructor(id){
    super('item');

    const { name , color , action } = Items[id];

    this.name = name;
    this.color = color;
    this.action = action;
  };


  /*
      Draw
  */

  draw(context){
    const [ x , y ] = this.position.axis;

    context.fillStyle = this.color;
    context.beginPath();
    context.arc(x * 50,y * 50,10,0,Math.PI * 2);
    context.fill();
  };


  /*
      Use
  */

  use(){
    console.log('Item being used');
    this.despawn();
    this.action(this);
  };
};


finish('entity/general/Item.js');
