const { Server, Origins } = require('boardgame.io/server');
const { FlammeRuche } = require('./Game/Game');

const server = Server({
  games: [FlammeRuche],
  origins: [Origins.LOCALHOST],
});

server.run(8000);