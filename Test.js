console.log(`This is a test`);

{
  let canvas;

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

      background-color:white;
      border: 1px solid black;
    `;
    document.body.appendChild(canvas);
  };


  init();
}
