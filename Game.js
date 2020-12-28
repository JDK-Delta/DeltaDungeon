DeltaDungeon = {
  keys: [],
  moves: [
    [ 0, 1], // Back
    [-1, 0], // Left
    [-1,-1], // Left Forward
    [ 0,-1], // Forward
    [ 1,-1], // Right Forward
    [ 1, 0]  // Right
  ]
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

    Renderer.start();
  };


  /*
      Level
  */

  function buildLevel(){
    console.log(`-> Building Level`);

    const
      { world } = DeltaDungeon,
      level = [];


    room(0,0,16,9);
    room(0,0,5,5);
    room(5,4,14,7);
    room(5,4,9,7);

    const tiles = new Map();
    level.forEach((axis) => tiles.set(Position.toId(axis),axis));
    console.log(tiles);
    tiles.delete('5:3');
    tiles.delete('1:5');
    tiles.delete('7:7');
    tiles.delete('9:6');

    tiles.forEach((pos) => {
      world.spawn(new Tile(),...pos);
    });

    const key_green = new Item('key_green');
    world.spawn(key_green,1,1);

    const key_red = new Item('key_red');
    world.spawn(key_red,6,5);

    const door_red = new Door('red','#FF0000AA');
    world.spawn(door_red,5,3);

    const door_green = new Door('green','#00FF00AA');
    world.spawn(door_green,7,7);


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
