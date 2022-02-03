import { React } from 'react';
import { RIDER_TYPE } from '../../const';
import { Hand } from '../Hand/Hand';
import './PlayerBoard.css'

export const PlayerBoard = ({ G, ctx, moves }) => {
    const rouleurHand = G.players[ctx.currentPlayer].riders[RIDER_TYPE.ROULEUR.ID].hand
    const sprinteurHand = G.players[ctx.currentPlayer].riders[RIDER_TYPE.SPRINTEUR.ID].hand
    const team = G.players[ctx.currentPlayer].team


    return (
        <div id="playerBoard">
            <div className='rider-cards'>
                <div className="card" onClick={() => moves.pickRouleurOrSprinteur(RIDER_TYPE.SPRINTEUR.ID)}>
                    <img src={`./cards/backs/${RIDER_TYPE.SPRINTEUR.ID}.png`} alt="sprinteur-deck"/>
                </div>
                {sprinteurHand.length === 4 ? 
                    <Hand 
                        hand={sprinteurHand} 
                        team={team} 
                        type={RIDER_TYPE.SPRINTEUR.ID}
                        playCardFn={moves.pickCard}
                    /> : <></>}
            </div>
            <div className='rider-cards'>
                <div className="card" onClick={() => moves.pickRouleurOrSprinteur(RIDER_TYPE.ROULEUR.ID)}>
                    <img src={`./cards/backs/${RIDER_TYPE.ROULEUR.ID}.png`} alt="rouleur-deck"/>
                </div>
                {rouleurHand.length === 4 ? 
                    <Hand 
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