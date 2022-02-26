import { React } from 'react';
import { RIDER_TYPE } from '../../const';
import { Deck } from '../Deck/Deck';
import { DiscardPile } from '../DiscardPile/DiscardPile';
import { Hand } from '../Hand/Hand';
import { getColorOfTeam } from '../../utils';
import './PlayerBoard.css'

export const PlayerBoard = ({ G, moves, playerID }) => {
    const rouleur = G.players[playerID].riders[RIDER_TYPE.ROULEUR.ID]
    const sprinteur = G.players[playerID].riders[RIDER_TYPE.SPRINTEUR.ID]
    const team = G.players[playerID].team

    return (
        <div id="playerBoard">

            <div className='rider-playzone'>
                <div 
                    className='header'
                    style={{backgroundColor: getColorOfTeam(team)}}
                >
                    Sprinteur 🚲
                </div>
                <div className='body'>
                    <Deck
                        moves={moves}
                        playerID={playerID}
                        riderTypeID={RIDER_TYPE.SPRINTEUR.ID}
                        deckSize={sprinteur.deck.length}
                    />
                    <Hand
                        playerID={playerID}
                        hand={sprinteur.hand} 
                        team={team} 
                        type={RIDER_TYPE.SPRINTEUR.ID}
                        playCardFn={moves.pickCard}
                    />
                    <DiscardPile 
                        rider={sprinteur}
                        discardPileSize={sprinteur.discardPile.length}
                    />
                </div>
            </div>


            <div className='rider-playzone'>
                <div 
                    className='header' 
                    style={{backgroundColor: getColorOfTeam(team)}}
                >
                    Rouleur 🚲
                </div>
                <div className='body'>
                    <Deck
                        moves={moves}
                        playerID={playerID}
                        riderTypeID={RIDER_TYPE.ROULEUR.ID}
                        deckSize={rouleur.deck.length}
                    />
                    <Hand 
                        playerID={playerID}
                        hand={rouleur.hand} 
                        team={team} 
                        type={RIDER_TYPE.ROULEUR.ID}
                        playCardFn={moves.pickCard}
                    /> 
                    <DiscardPile 
                        rider={rouleur}
                        discardPileSize={rouleur.discardPile.length}
                    />
                </div>
            </div>


        </div>
        )
}