import { Client } from 'boardgame.io/react';
import { FlammeRuche } from './Game/Game';
import { Board } from './Board/Board';
import { SocketIO } from 'boardgame.io/multiplayer';
import { useState } from 'react';

const FlammeRucheClient = Client({ 
  game: FlammeRuche,
  board: Board,
  multiplayer: SocketIO({
    server: "localhost:8000"
  }),
  numPlayers: 2
});

const App = () => {
  const [playerID, setPlayerID] = useState(undefined)
  
  return (
    playerID === undefined ? 
      <div>
        <p>Play as</p>
        <button onClick={() => setPlayerID("0")}>
          Player 0
        </button>
        <button onClick={() => setPlayerID("1")}>
          Player 1
        </button>
      </div>
      :
      <FlammeRucheClient playerID={playerID} />
  )
}

export default App;