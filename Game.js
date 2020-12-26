console.log(`This is a test`);

DeltaDungeon = {};

try {
  let
    canvas,
    context;

  function init(){
    canvas = create('canvas');
    canvas.setAttribute('width',800);
    canvas.setAttribute('height',450);
    canvas.style = `
      position: absolute;
      width: 800px;
      height: 450px;
      right: 0;
      bottom: 0;

      z-index:99999;

      background-color:#00000044;
      border: 3px solid white;
    `;
    canvas.appendTo(document.body);

    context = canvas.getContext('2d',{ alpha: true });




    // ⵠ.log(window.MbApi.file);
    // ⵠ.log(ⵠ.root);

    // const image = document.createElement('img');
    // image.src = `C:/Users/John/mblock/Scripts/DeltaDungeon/assets/Test.png`;
    // image.onload = () => {
    //   console.log('image lado',image);
    // }
    // document.body.appendChild(image);

    ⵠ.log('before controls');

    let world = new World();
    let player = new Player();
    world.spawn(player,8,4);
    let tile1 = new Tile();
    world.spawn(tile1,9,4);

    let moves = [
      [ 0, 1], // Back
      [-1, 0], // Left
      [-1,-1], // Left Forward
      [ 0,-1], // Forward
      [ 1,-1], // Right Forward
      [ 1, 0]  // Right
    ];


    Controls.onKey('down',0,() => {
      console.log('Button 1 pressed');
      // console.log('moving relative [X,Y]: ',moves[direction]);
      player.move(...moves[player.rotation]);//.map((dir) => dir * 50));
    });

    Controls.onKey('down',1,() => {
      console.log('Button 2 pressed');
    });

    Controls.onKey('down',2,() => {
      console.log('Button 3 pressed');
    });

    Controls.onDir((dir) => player.rotation = dir);

    ⵠ.log('after controls');

    function render(){
      context.clearRect(0,0,800,450);

      world.entities.forEach((entity) => {
        entity.draw(context);
      });

      setTimeout(render,200);
    };

    render();

    // let texture = new DeltaDungeon.Texture('default',`C:/Users/John/mblock/Scripts/DeltaDungeon/assets/Test.png`)
    // texture.onLoad(() => {
    //   console.log('Loaded',texture);
    // });
    //

  };

  ⵠ.log(`Starting up DeltaDungeon`);

  ⵠ.scripts.push(() => {
    init();
  })
} catch (e) {
  ⵠ.error(e);
}

finish('Game.js');
