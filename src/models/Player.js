import { RIDER_TYPE } from "../const";
import { Rider } from "./Rider";

export const Player = team => {
    return {
        riders: [
            Rider(RIDER_TYPE.ROULEUR, team),
            Rider(RIDER_TYPE.SPRINTEUR, team),
        ],
        team,
        hasPlayed: {
            rouleur: false,
            sprinteur: false
        }
    }
}