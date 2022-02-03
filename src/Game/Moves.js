import { INVALID_MOVE } from "boardgame.io/core";
import { CARD, POS, RIDER_TYPE, SQUARE_TYPE } from "../const";
import { shuffle, reverse, min, max } from 'lodash';

export const pickRouleurOrSprinteur = (G, ctx, riderID) => {
    G.players[ctx.currentPlayer].choosenRider = riderID

    drawCards(G, ctx)

    ctx.events.endStage()
}

const drawCards = (G, ctx) => {
    const riderID = G.players[ctx.currentPlayer].choosenRider
    let rider = G.players[ctx.currentPlayer].riders[riderID]

    if (rider.hand.length !== 0) {
        return INVALID_MOVE
    }

    if (rider.deck.length < 4) {
        rider.deck.push(...shuffle(rider.discardPile))
        rider.deck = reverse(rider.deck)
    }

    for (let i = 0; i < 4; i++) rider.hand.push(rider.deck.pop());
}

export const pickCard = (G, ctx, cardID) => {
    const riderID = G.players[ctx.currentPlayer].choosenRider
    let rider = G.players[ctx.currentPlayer].riders[riderID]
    let hasPlayed = G.players[ctx.currentPlayer].hasPlayed

    rider.nextMove = getNextMoveFromCard(rider.hand[cardID], G.track.squares[rider.position[POS.X]])

    // discard unplayed cards
    rider.discardPile.push(...rider.hand.filter((_, id) => id !== cardID))

    // empty hand 
    rider.hand = []

    if (riderID === RIDER_TYPE.ROULEUR.ID) hasPlayed.rouleur = true
    else if (riderID === RIDER_TYPE.SPRINTEUR.ID) hasPlayed.sprinteur = true

    if (hasPlayed.rouleur && hasPlayed.sprinteur) {
        ctx.events.endTurn()
    }
    else {
        G.players[ctx.currentPlayer].choosenRider = 1 - G.players[ctx.currentPlayer].choosenRider
        drawCards(G, ctx)
    }
}

export const getNextMoveFromCard = (card, square) => {
    let steps = (card === CARD.FATIGUE.LABEL) ? CARD.FATIGUE.VALUE : card

    switch (square.type) {
        case SQUARE_TYPE.ASCENT:
            steps = min([steps, 5])
            break;
    
        case SQUARE_TYPE.DESCENT:
            steps = max([steps, 5])
            break;
        
        default:
            // Do nothing
    }

    return steps
}