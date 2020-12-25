/*
    Controls.js
*/

Controls = {};

{
  let last = [0,0,0,0];
  const events = Map.fromObject({
    'down': [],
    'up': [],
    'dir': []
  });


  ⵠ.Meta.onCall('update_controls',(args = '') => {
    args
    .chars()
    .map(Number)
    .forEach((value,index) => {
      if(last[index] === value)
        return;

      last[index] = value;
      action(index,value);
    });
  });


  /*
      Action
  */

  function action(type,value){
    if(type > 2)
      return events
        .get('dir')
        .forEach((callback) => callback(value));

    events
    .get(value ? 'down' : 'up')
    .filter(({ button }) => button === type)
    .forEach(({ callback }) => callback());
  };



  /*
      On
  */

  Controls.onKey = (type = 'down',button = 0,callback) => {
    events
    .get(type)
    .push({ button , callback });
  };

  Controls.onDir = (callback) => {
    events
    .get('dir')
    .push(callback);
  };
}
