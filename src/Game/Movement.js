import { POS, SQUARE, CARD, SQUARE_TYPE } from "../const";
import { min, max } from 'lodash';
import { nextAscentSquareDistance } from "../utils";

export const NewPos = (track, steps, rider) => {
    const expectedSquare = rider.position[POS.X] + steps
    // handle no more steps to test
    if (steps === 0) return rider.position

    // If right lane is available
    if (track.squares[expectedSquare].rightLane === null) {
        return [expectedSquare, SQUARE.LANE.RIGHT]
    // Else if left lane is available
    } else if (track.squares[expectedSquare].leftLane === null) {
        return [expectedSquare, SQUARE.LANE.LEFT]
    // Else recursively check for destination minus 1
    } else {
        return NewPos(track, steps - 1, rider)
    }
}

export const getNextMoveFromCard = (card, squares, riderPosX) => {
    let steps = (card === CARD.FATIGUE.LABEL) ? CARD.FATIGUE.VALUE : card

    switch (squares[riderPosX].type) {
        case SQUARE_TYPE.ASCENT:
            steps = min([steps, 5])
            break;
    
        case SQUARE_TYPE.DESCENT:
            steps = max([steps, 5])
            break;

        case SQUARE_TYPE.ROAD:
            if (steps > 5) {
                // trust me, i'm an engineer
                steps = min([max([nextAscentSquareDistance(squares, riderPosX) - 1, 5]), steps])
            }
            break;
        
        default:
            // Do nothing
    }

    // check to avoid going off the track
    steps = min([steps, squares.length - riderPosX])

    return steps
}