import { React } from 'react';
import { CARD } from '../../const';

import './Hand.css'

export const Hand = ({ playerID, hand, team, type, playCardFn }) => {
    return (
            <div className='hand'>
                {hand.map((card, index) => (
                    <div key={index} className='card' onClick={() => playCardFn(index, playerID)}>
                        { card === CARD.FATIGUE.LABEL ? 
                            <img src={`./img/cards/fatigue/${type}.png`} alt="card"/>
                          :
                            <img src={`./img/cards/teams/${team}/${type}/${card}.png`} alt="card"/>
                        }
                    </div>))}
            </div>
        )
}