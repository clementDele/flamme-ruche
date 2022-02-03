import { RIDER_TYPE } from "../const";
import { Rider } from "./Rider";

export const Player = (team, isBot) => {
    return {
        riders: [
            Rider(RIDER_TYPE.ROULEUR, team),
            Rider(isBot ? RIDER_TYPE.MUSCLE_SPRINTEUR : RIDER_TYPE.SPRINTEUR, team),
        ],
        team,
        isBot,
        hasPlayed: {
            rouleur: false,
            sprinteur: false
        }
    }
}