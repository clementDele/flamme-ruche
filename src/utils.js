import { SQUARE_TYPE } from "./const"

export const buildFrontRiderFromRiderID = riderID => {
    const idSplit = riderID.split("_")
    
    return {
        type: idSplit[0],
        team: idSplit[1]
    }
}

export const getRiderFromRiderId = (players, riderID) => {
    let rider = null

    for (const player of Object.values(players)){
        for (let i = 0; i < 2; i++) {
            if (riderID === player.riders[i].id) rider = player.riders[i]
        }
    };

    return rider
}

export const getRiderOrder = (G) => {
    let order = []
    for (let x=G.track.squares.length-1; x >= 0; x--) {
        if (G.track.squares[x].rightLane !== null) 
            order.push(G.track.squares[x].rightLane)

        if (G.track.squares[x].leftLane !== null) 
            order.push(G.track.squares[x].leftLane)
    }

    return order
}


export const resetRidersStates = players => {
    for (const player of Object.values(players)){
        player.hasPlayed.rouleur = false
        player.hasPlayed.sprinteur = false
        player.riders.forEach(rider => {
            rider.nextMove = 0
        });
    };
}

export const hasEveryonePlayed = players => {
    let hasEveryonePlayed = true
    for (const player of Object.values(players)){
        if (!player.hasPlayed.rouleur || !player.hasPlayed.sprinteur) hasEveryonePlayed = false
    };

    return hasEveryonePlayed
}

export const nextAscentSquareDistance = (squares, riderPos) => {
    for (let i = riderPos; i < squares.length; i++) {
        if (squares[i].type === SQUARE_TYPE.ASCENT) return i - riderPos
    }

    // If no ascent left, return distance until end of track
    return squares.length - riderPos
}

export const aRiderHasFinished = track => {
    for (let i = track.finishLine; i < track.squares.length; i++) {
        if (track.squares[i].rightLane !== null) return true
    }

    return false
}

export const getWinner = track => {
    for (let i = track.squares.length - 1; i >= track.finishLine; i--) {
        if (track.squares[i].rightLane !== null) return track.squares[i].rightLane
    }
}

export const getColorOfTeam = team => {
    switch (team) {
        case "blue": return "#3e7ab0";
        case "black": return "#302f2d";
        case "green": return "#79c86b";
        case "red": return "#e75d40";
        default: return "black"
    }
}