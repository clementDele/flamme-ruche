import { Client } from 'boardgame.io/react';
import { Peloton } from './Game/Game';
import { Board } from './Board/Board';

const App = Client({ 
  game: Peloton,
  board: Board,
  numPlayers: 2
});

export default App;