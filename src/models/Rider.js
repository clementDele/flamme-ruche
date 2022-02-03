import { NOT_ON_BOARD } from "../const"
import { shuffle } from 'lodash';

export const Rider = (type, team) => {
    return {
        id: `${type.LABEL.charAt(0)}_${team}`,
        type: type.LABEL,
        team,
        hand: [],
        deck: shuffle(type.STARTING_DECK),
        discardPile: [],
        position: NOT_ON_BOARD,
        nextMove: 0
    }
}