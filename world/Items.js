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
  },
  key_yellow: {
    name: 'Yellow Key',
    color: '#FFFF00AA',
    action: () => {
      DeltaDungeon.keys.push('yellow');
    }
  },
  key_white: {
    name: 'White Key',
    color: '#FFFFFFAA',
    action: () => {
      DeltaDungeon.keys.push('white');
    }
  }
};


finish('DeltaDungeon/world/Items.js');
