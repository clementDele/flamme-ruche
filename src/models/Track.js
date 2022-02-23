import { SQUARE_TYPE } from "../const";
import { Square } from "./Square";

export const Track = stage => {
    const squares = buildTrackSquares(stage.TILES)
    const startLine = getStartLine(squares)
    const finishLine = getFinishLine(squares)

    return {
        squares,
        startLine,
        finishLine
    }
}

const buildTrackSquares = stageTiles =>  {
    let squares = [] 
    stageTiles.forEach(t => {
        squares.push(...t)
    });
    return squares.map(sq => Square(sq))
}

const getStartLine = squares =>  {
    return squares.map(sq => sq.type).lastIndexOf(SQUARE_TYPE.START)
}

const getFinishLine = squares => {
    return squares.map(sq => sq.type).indexOf(SQUARE_TYPE.FINISH)
}
