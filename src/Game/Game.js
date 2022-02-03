import { TEAM, TRACK } from "../const"
import { Player } from "../models/Player";
import { Track } from "../models/Track";
import { PlaceRiders } from "../Moves";
import { pickCard, pickRouleurOrSprinteur } from "./Moves";
import { ActivePlayers } from "boardgame.io/core";
import { resolveExhaustion, resolveMoves, resolveSlipstream } from "./Resolves";
import { resetRidersStates, hasEveryonePlayed } from "../utils";


export const Peloton = {
    setup: (G, ctx) => {
        let game = {
            players: [
                // Player(TEAM.RED, true),
                // Player(TEAM.BLACK, true),
                Player(TEAM.BLUE, true),
                Player(TEAM.GREEN, false)
            ],
            track: Track(TRACK.FIRENZE_MILANO)
        }

        PlaceRiders(game)

        return game
    },

    phases: {
        energyPhase: {
            start: true,
            next: "energyPhase",

            turn: {
                activePlayers: ActivePlayers.ALL,

                onBegin: (G,ctx) => ctx.events.setActivePlayers({
                    all: 'pickRouleurOrSprinteur'
                }),

                stages: {
                    pickRouleurOrSprinteur: {
                        moves: {
                            pickRouleurOrSprinteur: (G, ctx, riderID) => pickRouleurOrSprinteur(G, ctx, riderID)
                        },

                        endIf: (G, ctx) => G.players[ctx.currentPlayer].choosenRider !== null,

                        next: "pickCard"
                    },
                    pickCard: {
                        moves : {
                            pickCard: (G, ctx, cardID) => pickCard(G, ctx, cardID)
                        }
                    }
                }
            },

            endIf: (G, ctx) => hasEveryonePlayed(G.players),

            onEnd: (G, ctx) => {
                resolveMoves(G)
                resolveSlipstream(G)
                resolveExhaustion(G)
                resetRidersStates(G.players)
            }
        }
    }
};