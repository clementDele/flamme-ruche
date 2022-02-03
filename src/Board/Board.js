import { React } from 'react';
import { Track } from './Track/Track';

import './Board.css'
import { PlayerBoard } from './PlayerBoard/PlayerBoard';

export const Board = ({ ctx, G, moves }) => {
    return (
        <div id='board'>
            <Track track={G.track}></Track>
            <PlayerBoard G={G} ctx={ctx} moves={moves}/>
        </div>
    )
}

