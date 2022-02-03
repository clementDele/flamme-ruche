import { NewPos } from './Movement'

const InitGame = () => {
    let game = {
        players: [
            Player(TEAM.RED, true),
            Player(TEAM.BLACK, true),
            Player(TEAM.BLUE, true),
            Player(TEAM.GREEN, false)
        ],
        track: Track(TRACK.FIRENZE_MILANO)
    }

    PlaceRiders(game)

    return game
}

test("test without blocking without slipstream", () => {
     
});

test("test with blocking without slipstream", () => {

});

test("test without blocking with slipstream", () => {

});

test("test with blocking with slipstream", () => {

});