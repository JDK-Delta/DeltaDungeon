/*
    Keys.js
*/


const Keys = {};

{
  const keys = new Set();
  const order = [
    [0,255,0],
    [255,0,0],
    [255,255,0],
    [255,255,255],
    [255,109,211]
  ];


  /*
      Collect
  */

  Keys.collect = (key) => {
    keys.add(key);
    ⵠ.Meta.onListen(`key_${ key }`,true);
    order.shift();
    Keys.update();
  };


  /*
      Has
  */

  Keys.has = (key) => {
    return keys.has(key);
  };


  /*
      Update
  */

  Keys.update = () => {
    const
      { onListen } = ⵠ.Meta,
      [ r , g , b ] = order[0];

    onListen('next_indicator_r',r);
    onListen('next_indicator_g',g);
    onListen('next_indicator_b',b);
    onListen('buzzer',200);
    setTimeout(() => {
      onListen('buzzer',0);
    },400);
  };
}

finish('mechanic/Keys.js');
