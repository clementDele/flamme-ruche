import { React } from 'react';
import { Track } from './Track/Track';

import './Board.css'
import { PlayerBoard } from './PlayerBoard/PlayerBoard';
import { OpponentsZone } from './OpponentsZone/OpponentsZone';

export const Board = ({ ctx, G, moves, playerID }) => {
    return (
        <div id='board' style={{background: `url('${process.env.PUBLIC_URL}/img/background.png')`}}>
            <OpponentsZone />
            <Track track={G.track}></Track>
            <PlayerBoard G={G} ctx={ctx} moves={moves} playerID={playerID}/>
        </div>
    )
}

