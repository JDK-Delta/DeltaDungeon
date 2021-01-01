/*
    Items.js
*/

Items = {
  key_red: {
    name: 'Red Key',
    color: '#FF0000AA',
    action: () => Keys.collect('red')
  },
  key_green: {
    name: 'Green Key',
    color: '#00FF00AA',
    action: () => Keys.collect('green')
  },
  key_yellow: {
    name: 'Yellow Key',
    color: '#FFFF00AA',
    action: () => Keys.collect('yellow')
  },
  key_white: {
    name: 'White Key',
    color: '#FFFFFFAA',
    action: () => Keys.collect('white')
  }
};


finish('DeltaDungeon/world/Items.js');
