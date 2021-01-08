DeltaDungeon = {
  keys: [],
  moves: [
    [ 0, 1], // Back
    [-1, 0], // Left
    [-1,-1], // Left Forward
    [ 0,-1], // Forward
    [ 1,-1], // Right Forward
    [ 1, 0]  // Right
  ],
  finish: () => {
    Renderer.destroy();
  }
};

try {

  ⵠ.scripts.push(init);


  /*
      Init
  */

  function init(){
    console.log(`-> Initializing`);

    DeltaDungeon.world = new World();
    DeltaDungeon.player = new Player();

    const { world , player } = DeltaDungeon;
    player.rotation = 5;
    world.spawn(player,2,3);

    buildLevel();
    registerControls();

    Keys.update();

    Renderer.start();
  };


  /*
      Level
  */

  function buildLevel(){
    console.log(`-> Building Level`);

    const
      { world } = DeltaDungeon,
      level = [
        [7,2],[8,2],[10,2],[10,3],
        [11,6],[12,6],[10,8],[15,4]
      ];


    room(0,0,16,9);
    room(0,0,5,5);
    room(5,4,14,7);
    room(5,4,9,7);

    const tiles = new Map();
    level.forEach((axis) => tiles.set(Position.toId(axis),axis));
    tiles.delete('5:3');
    tiles.delete('1:5');
    tiles.delete('7:7');
    tiles.delete('9:6');
    tiles.delete('13:7');

    tiles.forEach((pos) => {
      world.spawn(new Tile(),...pos);
    });

    const keys= [{
      id: 'key_red',
      pos: [1,1]
    },{
      id: 'key_green',
      pos: [6,5]
    },{
      id: 'key_yellow',
      pos: [9,3]
    },{
      id: 'key_white',
      pos: [15,5]
    }];

    keys.forEach(({ id , pos }) => {
      world.spawn(new Item(id),...pos);
    });


    const doors = [{
      key: 'green',
      color: '#00FF00AA',
      pos: [5,3],
      rotation: 1
    },{
      key: 'red',
      color: '#FF0000AA',
      pos: [7,7],
      rotation: 0
    },{
      key: 'yellow',
      color: '#FFFF00AA',
      pos: [13,7],
      rotation: 0
    },{
      key: 'white',
      color: '#FFFFFFAA',
      pos: [10,1],
      rotation: 1
    }];

    doors.forEach(({ key , pos , color , rotation }) => {
      world.spawn(new Door(key,color,rotation),...pos);
    });


    world.spawn(new Goal(),15,2);


    /*
        Room
    */

    function room(x1,y1,x2,y2){
      for(let x = x1;x <= x2;x++){
        level.push([x,y1]);
        level.push([x,y2]);
      };

      for(let y = y1 + 1;y < y2;y++){
        level.push([x1,y]);
        level.push([x2,y]);
      };
    }
  };


  /*
      Controls
  */

  function registerControls(){
    console.log(`-> Registering Controls`);

    const { player , moves } = DeltaDungeon;


    /*  Move  */

    Controls.onKey('down',0,() => {
      player.move(...moves[player.rotation]);
    });


    /*  Use  */

    Controls.onKey('down',1,() => {
      console.log('Button 2 pressed');
      player.use();
    });


    /*  Disconnect  */

    Controls.onKey('down',2,() => {});


    /*  Change Direction  */

    Controls.onDir((dir) => player.rotation = dir);
  };
} catch (e) {
  ⵠ.error(e);
}

finish('Game.js');
