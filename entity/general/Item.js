/*
    Item.js
*/


class Item extends Entity {



  constructor(id){
    super('item');

    const { name } = Items[id];

    this.name = name;
  };


  /*
      Draw
  */

  draw(context){
    const [ x , y ] = this.position.axis;

    context.fillStyle = '#FF0000AA';
    context.beginPath();
    context.arc(x * 50,y * 50,12,0,Math.PI * 2);
    context.fill();
  };
};


finish('entity/world/Items.js');
