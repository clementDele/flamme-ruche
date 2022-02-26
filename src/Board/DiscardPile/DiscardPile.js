import { React } from 'react';
import './DiscardPile.css'

export const DiscardPile = ({ rider, discardPileSize }) => {
    return (
        <div className='discard-pile'>
            <div className='header'>Discard pile ({discardPileSize})</div>
            <div className='body'>
                {rider.discardPile.length !== 0 ?
                    <div>
                        <div className="card">
                            <img src={`./img/cards/teams/${rider.team}/${rider.type.ID}/${rider.discardPile[rider.discardPile.length - 1]}.png`} alt="deck"/>
                        </div>
                    </div>
                :
                    <div className='empty-discard-pile'></div>
                }
            </div>
        </div>
    )
}