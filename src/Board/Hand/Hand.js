import { React } from 'react';
import { CARD } from '../../const';

import './Hand.css'

export const Hand = ({ hand, team, type, playCardFn }) => {
    return (
            <div className='hand'>
                {hand.map((card, index) => (
                    <div key={index} className='card' onClick={() => playCardFn(index)}>
                        { card === CARD.FATIGUE.LABEL ? 
                            <img src={`./cards/fatigue/${type}.png`} alt="card"/>
                          :
                            <img src={`./cards/teams/${team}/${type}/${card}.png`} alt="card"/>
                        }
                    </div>))}
            </div>
        )
}