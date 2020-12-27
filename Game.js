DeltaDungeon = {};

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
    world.spawn(player,8,4);

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
      level = [
        /*  Room 1  */
        [0,0],[1,0],[2,0],[3,0],[4,0],
        [5,0],[5,1],[5,2],[5,4],[5,5],
        [5,6],[4,6],[3,6],[2,6],[1,6],
        [0,6],[0,5],[0,4],[0,3],[0,2],
        [0,1]
      ];

    level.forEach((pos) => {
      world.spawn(new Tile(),...pos);
    });

    const key_red = new Item('key_red');
    world.spawn(key_red,1,1);
  };


  /*
      Controls
  */

  function registerControls(){
    console.log(`-> Registering Controls`);

    const { player } = DeltaDungeon;

    let moves = [
      [ 0, 1], // Back
      [-1, 0], // Left
      [-1,-1], // Left Forward
      [ 0,-1], // Forward
      [ 1,-1], // Right Forward
      [ 1, 0]  // Right
    ];


    Controls.onKey('down',0,() => {
      player.move(...moves[player.rotation]);
    });

    Controls.onKey('down',1,() => {
      console.log('Button 2 pressed');
    });

    Controls.onKey('down',2,() => {
      console.log('Button 3 pressed');
      // Disconnect
    });

    Controls.onDir((dir) => player.rotation = dir);
  };
} catch (e) {
  ⵠ.error(e);
}

finish('Game.js');
