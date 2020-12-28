/*
    Items.js
*/

Items = {
  key_red: {
    name: 'Red Key',
    color: '#FF0000AA',
    action: () => {
      DeltaDungeon.keys.push('red');
    }
  },
  key_green: {
    name: 'Green Key',
    color: '#00FF00AA',
    action: () => {
      DeltaDungeon.keys.push('green');
    }
  }
};


finish('DeltaDungeon/world/Items.js');
