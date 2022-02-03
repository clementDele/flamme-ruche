import { POS, SQUARE } from "../const"

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