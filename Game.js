console.log(`This is a test`);

try {
  let canvas;
  let context;

  function init(){
    canvas = document.createElement('canvas');
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
    document.body.appendChild(canvas);

    context = canvas.getContext('2d',{ alpha: true });

    let world = new World();

    let entity = new Tile();
    world.spawn(entity);
  };

  ⵠ.log(`Starting up DeltaDungeon`);

  ⵠ.scripts.push(() => {
    init();
  })
} catch (e) {
  console.error(e);
}
