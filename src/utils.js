export const buildFrontRiderFromRiderID = riderID => {
    const idSplit = riderID.split("_")
    
    return {
        type: idSplit[0],
        team: idSplit[1]
    }
}

export const getRiderFromRiderId = (players, riderID) => {
    let retRider = null

    players.forEach(player => {
        player.riders.forEach(rider => {
            if (riderID === rider.id) retRider = rider
        });
    });

    return retRider
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
    players.forEach(player => {
        player.hasPlayed.rouleur = false
        player.hasPlayed.sprinteur = false
        player.riders.forEach(rider => {
            rider.nextMove = 0
        });
    });
}

export const hasEveryonePlayed = players => {
    let hasEveryonePlayed = true
    players.forEach(player => {
        if (!player.hasPlayed.rouleur || !player.hasPlayed.sprinteur) hasEveryonePlayed = false
    });

    return hasEveryonePlayed
}
