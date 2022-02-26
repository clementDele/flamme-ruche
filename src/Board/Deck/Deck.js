import { React } from 'react';
import './Deck.css'

export const Deck = ({ moves, riderTypeID, playerID, deckSize }) => {
    return (
        <div className='deck'>
            <div className='header'>Deck ({deckSize})</div>
            <div className='body'>
                <div className="card" onClick={() => moves.pickRouleurOrSprinteur(playerID, riderTypeID)}>
                    <img src={`./img/cards/backs/${riderTypeID}.png`} alt="deck"/>
                </div>
            </div>
        </div>
    )
}