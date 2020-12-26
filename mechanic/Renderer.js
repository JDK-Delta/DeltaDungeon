/*
    Renderer.js
*/


const Renderer = {}

{
  Renderer.start = start;

  let
    canvas,
    context;


  /*
      Init
  */

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
  };


  /*
      Start
  */

  function start(){
    init();
    render();
  };


  /*
      Render
  */

  function render(){
    context.clearRect(0,0,800,450);

    DeltaDungeon.world.entities.forEach((tile) => {
      tile.forEach((entity) => {
        entity.draw(context);
      });
    });

    setTimeout(render,200);
  };
}


finish('mechanic/Renderer.js');
