import { React } from 'react';

import './Hand.css'

export const Hand = ({ playerID, hand, team, type, playCardFn }) => {
    return (
        <div className='hand'>
            <div className='header'>Hand</div>
            <div className='body'>
            {hand.map((card, index) => (
                <div key={index} className='card' onClick={() => playCardFn(index, playerID)}>
                    <img src={`./img/cards/teams/${team}/${type}/${card}.png`} alt="card"/>
                </div>))}
            </div>
        </div>
    )
}