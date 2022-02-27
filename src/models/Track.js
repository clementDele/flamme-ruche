import { SQUARE_TYPE } from "../const";
import { Square } from "./Square";

export const Track = stage => {
    const tiles = stage.TILES
    const squares = buildTrackSquares(tiles)
    const startLine = getStartLine(squares)
    const finishLine = getFinishLine(squares)

    return {
        tiles,
        squares,
        startLine,
        finishLine
    }
}

const buildTrackSquares = tiles =>  {
    let squares = [] 
    tiles.forEach(t => {
        squares.push(...t.squares)
    });
    return squares.map(sq => Square(sq))
}

const getStartLine = squares =>  {
    return squares.map(sq => sq.type).lastIndexOf(SQUARE_TYPE.START)
}

const getFinishLine = squares => {
    return squares.map(sq => sq.type).indexOf(SQUARE_TYPE.FINISH)
}
