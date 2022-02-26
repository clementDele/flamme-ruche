import { INVALID_MOVE } from "boardgame.io/core";
import { POS, RIDER_TYPE, CARD } from "../const";
import { shuffle, reverse, min } from 'lodash';
import { getNextMoveFromCard } from "./Movement";


export const pickRouleurOrSprinteur = (G, ctx, playerID, riderID) => {
    G.players[playerID].choosenRider = riderID

    drawCards(G, playerID)

    ctx.events.endStage()
}

const drawCards = (G, playerID) => {
    const riderID = G.players[playerID].choosenRider
    let rider = G.players[playerID].riders[riderID]

    if (rider.hand.length !== 0) {
        return INVALID_MOVE
    }

    if (rider.deck.length < 4) {
        // handle no cards left at all
        if (rider.deck.length + rider.discardPile.length === 0) {
            rider.deck.push(CARD.FATIGUE.LABEL)
        } else {
            rider.deck.push(...shuffle(rider.discardPile))
            rider.deck = reverse(rider.deck)
            rider.discardPile = []
        }
    }

    const minDeckLengthOr4 = min([rider.deck.length, 4])
    for (let i = 0; i < minDeckLengthOr4; i++) {
        console.log("draw!", i)
        rider.hand.push(rider.deck.pop());
    }
}

export const pickCard = (G, ctx, cardID, playerID) => {
    const riderID = G.players[playerID].choosenRider
    let rider = G.players[playerID].riders[riderID]
    let hasPlayed = G.players[playerID].hasPlayed

    rider.nextMove = getNextMoveFromCard(rider.hand[cardID], G.track.squares, rider.position[POS.X])

    // discard unplayed cards
    rider.discardPile.push(...rider.hand.filter((_, id) => id !== cardID))

    // empty hand 
    rider.hand = []

    if (riderID === RIDER_TYPE.ROULEUR.ID) hasPlayed.rouleur = true
    else if (riderID === RIDER_TYPE.SPRINTEUR.ID) hasPlayed.sprinteur = true

    if (hasPlayed.rouleur && hasPlayed.sprinteur) {
        ctx.events.setStage({ stage: "waitingStage" })
    }
    else {
        // tranform 0 to 1 and 1 to 0 
        G.players[playerID].choosenRider = 1 - G.players[playerID].choosenRider

        drawCards(G, playerID)
    }
}

