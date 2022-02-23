import { CARD, POS, SQUARE } from "../const";
import { getRiderOrder, getRiderFromRiderId } from "../utils";
import { NewPos } from "./Movement";

export const resolveMoves = G => {
    const order = getRiderOrder(G)

    order.forEach(riderID => {
        let rider = getRiderFromRiderId(G.players, riderID)
    
        // remove it from its last position
        if (G.track.squares[rider.position[POS.X]].rightLane === rider.id) {
            G.track.squares[rider.position[POS.X]].rightLane = null 
        } else {
            G.track.squares[rider.position[POS.X]].leftLane = null 
        }

        // update rider position
        rider.position = NewPos(G.track, rider.nextMove, rider)

        // move rider to its new position
        if (rider.position[POS.Y] === SQUARE.LANE.RIGHT) {
            G.track.squares[rider.position[POS.X]].rightLane = rider.id
        } else {
            G.track.squares[rider.position[POS.X]].leftLane = rider.id
        }
    })
}

export const resolveSlipstream = G => {
    let repeat = true
    
    while (repeat) {
        repeat = false
        for (let posX = 0; posX < G.track.finishLine - 1; posX++) {
            // check if there is a rider at this pos
            if (G.track.squares[posX].rightLane !== null) {

                //checks if there is a slipstream (x+1 empty and a rider in x+2)
                if (G.track.squares[posX+1].rightLane === null && G.track.squares[posX+2].rightLane !== null) {                    
                    //then clear the previous pos and setting new pos for both rightlane and leftlane
                    let riderIDRight = G.track.squares[posX].rightLane
                    let riderRight = getRiderFromRiderId(G.players, riderIDRight)
                    
                    G.track.squares[posX].rightLane = null 
                    G.track.squares[posX+1].rightLane = riderIDRight
                    riderRight.position[POS.X] += 1  
                    
                    if (G.track.squares[posX].leftLane !== null) {
                        let riderIDLeft = G.track.squares[posX].leftLane
                        let riderLeft = getRiderFromRiderId(G.players, riderIDLeft)

                        G.track.squares[posX].leftLane = null
                        G.track.squares[posX+1].leftLane = riderIDLeft
                        riderLeft.position[POS.X] += 1 
                    }                     

                    repeat = true //update
                }
            }
        }
    }
}

export const resolveExhaustion = G => {
    for (let posX = 0; posX < G.track.finishLine; posX++) {
        // check if there is a rider at this pos
        if (G.track.squares[posX].rightLane !== null) {

            //checks if the rider gets exhaustion (x+1 empty)
            if (G.track.squares[posX+1].rightLane === null) {
                let riderIDRight = G.track.squares[posX].rightLane
                let riderRight = getRiderFromRiderId(G.players, riderIDRight)
                
                riderRight.discardPile.push(CARD.FATIGUE.LABEL)  
                
                if (G.track.squares[posX].leftLane !== null) {
                    let riderIDLeft = G.track.squares[posX].leftLane
                    let riderLeft = getRiderFromRiderId(G.players, riderIDLeft)

                    riderLeft.discardPile.push(CARD.FATIGUE.LABEL) 
                }                     
            } 
        }
    }
}
