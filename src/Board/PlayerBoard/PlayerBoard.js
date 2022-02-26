import { React } from 'react';
import { RIDER_TYPE } from '../../const';
import { Hand } from '../Hand/Hand';
import './PlayerBoard.css'

export const PlayerBoard = ({ G, ctx, moves, playerID }) => {
    const rouleurHand = G.players[playerID].riders[RIDER_TYPE.ROULEUR.ID].hand
    const sprinteurHand = G.players[playerID].riders[RIDER_TYPE.SPRINTEUR.ID].hand
    const team = G.players[playerID].team


    return (
        <div id="playerBoard">
            <div className='rider-cards'>
                <div className="card" onClick={() => moves.pickRouleurOrSprinteur(playerID, RIDER_TYPE.SPRINTEUR.ID)}>
                    <img src={`./cards/backs/${RIDER_TYPE.SPRINTEUR.ID}.png`} alt="sprinteur-deck"/>
                </div>
                {sprinteurHand.length ? 
                    <Hand
                        playerID={playerID}
                        hand={sprinteurHand} 
                        team={team} 
                        type={RIDER_TYPE.SPRINTEUR.ID}
                        playCardFn={moves.pickCard}
                    /> : <></>}
            </div>
            <div className='rider-cards'>
                <div className="card" onClick={() => moves.pickRouleurOrSprinteur(playerID, RIDER_TYPE.ROULEUR.ID)}>
                    <img src={`./cards/backs/${RIDER_TYPE.ROULEUR.ID}.png`} alt="rouleur-deck"/>
                </div>
                {rouleurHand.length ? 
                    <Hand 
                        playerID={playerID}
                        hand={rouleurHand} 
                        team={team} 
                        type={RIDER_TYPE.ROULEUR.ID}
                        playCardFn={moves.pickCard}
                    /> : <></>}
            </div>
            {}
        </div>
        )
}