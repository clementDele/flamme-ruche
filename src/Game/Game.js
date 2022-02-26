import { TEAM, TRACK } from "../const"
import { Player } from "../models/Player";
import { Track } from "../models/Track";
import { PlaceRiders } from "../Moves";
import { pickCard, pickRouleurOrSprinteur } from "./Moves";
import { ActivePlayers, PlayerView } from "boardgame.io/core";
import { resolveExhaustion, resolveMoves, resolveSlipstream } from "./Resolves";
import { resetRidersStates, hasEveryonePlayed, aRiderHasFinished, getWinner } from "../utils";


export const FlammeRuche = {
    setup: (G, ctx) => {
        let game = {
            players: {
                '0': Player(TEAM.BLUE),
                '1': Player(TEAM.GREEN),
                // '2': Player(TEAM.RED),
                // '3': Player(TEAM.BLACK)
            },
            track: Track(TRACK.FIRENZE_MILANO)
        }

        PlaceRiders(game)

        return game
    },

    playerView: PlayerView.STRIP_SECRETS,

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
                            pickRouleurOrSprinteur: (G, ctx, playerID, riderID) => pickRouleurOrSprinteur(G, ctx, playerID, riderID)
                        },

                        endIf: (G, ctx) => G.players[ctx.currentPlayer].choosenRider !== null,

                        next: "pickCard"
                    },
                    pickCard: {
                        moves : {
                            pickCard: (G, ctx, cardID, playerID) => pickCard(G, ctx, cardID, playerID)
                        }
                    },
                    waitingStage: {}
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
    },

    endIf: (G, ctx) => {
        if (aRiderHasFinished(G.track)) {
            return { winner: getWinner(G.track) };
        }
    }
};