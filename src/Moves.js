import { SQUARE } from "./const"

export const PlaceRiders = game => {
    const players = game.players

    for (const [index, player] of Object.entries(players)){
        const riders = player.riders

        if (riders.length === 2) {
            // Update track state
            const startingSquareIndex = game.track.startLine - index
            game.track.squares[startingSquareIndex].rightLane = riders[0].id
            game.track.squares[startingSquareIndex].leftLane = riders[1].id

            // Update riders states
            riders[0].position = [startingSquareIndex, SQUARE.LANE.RIGHT]
            riders[1].position = [startingSquareIndex, SQUARE.LANE.LEFT]
        } else {
            console.error(`there should be two riders but there is ${riders.length}`)
        }
    };
}
