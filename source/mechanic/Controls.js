/*
    Controls.js
*/

Controls = {};

try {
  let last = [0,0,0,0];
  const events = Map.fromObject({
    'down': [],
    'up': [],
    'dir': []
  });


  ⵠ.Meta.onCall('update_controls',(args = '') => {
    const values = args
      .match(/(\d)(\d)(\d)(\d+)/)
      .map(Number);

    values.shift();

    {
      const dir = values[3];
      values[3] = dir < 122 || dir > 900 ? 0 : Math.ceil((dir - 122) / 128);
    }

    // args
    // .chars()
    // .map(Number)
    values
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
} catch (e) { console.log(e); }

finish('mechanic/Controls.js');
