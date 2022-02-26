export const POS = {
    X: 0,
    Y: 1
}

export const NOT_ON_BOARD = [-1, -1]

export const SQUARE = {
    TYPE: 0,
    LANE: {
        RIGHT: 1,
        LEFT: 2
    }
}

export const CARD = {
    MUSCLE: {
        LABEL: 'M',
        VALUE: 5
    },
    FATIGUE: {
        LABEL: 'F',
        VALUE: 2
    }
}

export const TEAM = {
    RED: "red",
    GREEN: "green",
    BLUE: "blue",
    BLACK: "black",
}

export const RIDER_TYPE = {
    ROULEUR: {
        ID: 0,
        LABEL: "Rouleur",
        STARTING_DECK: [7, 7, 7, 6, 6, 6, 5, 5, 5, 4, 4, 4, 3, 3, 3]
    },
    SPRINTEUR: {
        ID: 1,
        LABEL: "Sprinteur",
        STARTING_DECK: [9, 9, 9, 5, 5, 5, 4, 4, 4, 3, 3, 3, 2, 2, 2]
    },
    MUSCLE_SPRINTEUR: {
        LABEL: "Sprinteur",
        STARTING_DECK: [CARD.MUSCLE.VALUE, 9, 9, 9, 5, 5, 5, 4, 4, 4, 3, 3, 3, 2, 2, 2]
    }
}

/**
 * Different track configurations
 */

export const SQUARE_TYPE = {
    START: "s",
    FINISH: "f",
    ROAD: "_",
    COBBLE: "c",
    ASCENT: "a",
    DESCENT: "d"
}

// straight
const a = [SQUARE_TYPE.START, SQUARE_TYPE.START, SQUARE_TYPE.START, SQUARE_TYPE.START, SQUARE_TYPE.START, SQUARE_TYPE.ROAD];
const b = [SQUARE_TYPE.ROAD, SQUARE_TYPE.ROAD, SQUARE_TYPE.ROAD, SQUARE_TYPE.ROAD, SQUARE_TYPE.ROAD, SQUARE_TYPE.ROAD];
const c = [SQUARE_TYPE.ROAD, SQUARE_TYPE.ROAD, SQUARE_TYPE.ROAD, SQUARE_TYPE.ROAD, SQUARE_TYPE.ROAD, SQUARE_TYPE.ROAD];
const d = [SQUARE_TYPE.ROAD, SQUARE_TYPE.ROAD, SQUARE_TYPE.ROAD, SQUARE_TYPE.ROAD, SQUARE_TYPE.ROAD, SQUARE_TYPE.ROAD];
const f = [SQUARE_TYPE.ROAD, SQUARE_TYPE.ROAD, SQUARE_TYPE.ROAD, SQUARE_TYPE.ROAD, SQUARE_TYPE.ROAD, SQUARE_TYPE.ROAD];
const l = [SQUARE_TYPE.ROAD, SQUARE_TYPE.ROAD, SQUARE_TYPE.ROAD, SQUARE_TYPE.ROAD, SQUARE_TYPE.ROAD, SQUARE_TYPE.ROAD];
const m = [SQUARE_TYPE.ROAD, SQUARE_TYPE.ROAD, SQUARE_TYPE.ROAD, SQUARE_TYPE.ROAD, SQUARE_TYPE.ROAD, SQUARE_TYPE.ROAD];
const n = [SQUARE_TYPE.ROAD, SQUARE_TYPE.ROAD, SQUARE_TYPE.ROAD, SQUARE_TYPE.ROAD, SQUARE_TYPE.ROAD, SQUARE_TYPE.ROAD];
const u = [SQUARE_TYPE.ROAD, SQUARE_TYPE.FINISH, SQUARE_TYPE.FINISH, SQUARE_TYPE.FINISH, SQUARE_TYPE.FINISH, SQUARE_TYPE.FINISH];
const A = [SQUARE_TYPE.START, SQUARE_TYPE.START, SQUARE_TYPE.START, SQUARE_TYPE.START, SQUARE_TYPE.ROAD, SQUARE_TYPE.ROAD];
const B = [SQUARE_TYPE.DESCENT, SQUARE_TYPE.DESCENT, SQUARE_TYPE.DESCENT, SQUARE_TYPE.DESCENT, SQUARE_TYPE.ROAD, SQUARE_TYPE.ROAD];
const C = [SQUARE_TYPE.ROAD, SQUARE_TYPE.ROAD, SQUARE_TYPE.ROAD, SQUARE_TYPE.ASCENT, SQUARE_TYPE.ASCENT, SQUARE_TYPE.ASCENT];
const D = [SQUARE_TYPE.ASCENT, SQUARE_TYPE.ASCENT, SQUARE_TYPE.ASCENT, SQUARE_TYPE.ASCENT, SQUARE_TYPE.ASCENT, SQUARE_TYPE.DESCENT];
const F = [SQUARE_TYPE.DESCENT, SQUARE_TYPE.DESCENT, SQUARE_TYPE.DESCENT, SQUARE_TYPE.ROAD, SQUARE_TYPE.ROAD, SQUARE_TYPE.ROAD];
const L = [SQUARE_TYPE.ASCENT, SQUARE_TYPE.ASCENT, SQUARE_TYPE.ASCENT, SQUARE_TYPE.DESCENT, SQUARE_TYPE.DESCENT, SQUARE_TYPE.DESCENT];
const M = [SQUARE_TYPE.ROAD, SQUARE_TYPE.ROAD, SQUARE_TYPE.ASCENT, SQUARE_TYPE.ASCENT, SQUARE_TYPE.ASCENT, SQUARE_TYPE.ASCENT];
const N = [SQUARE_TYPE.ASCENT, SQUARE_TYPE.ASCENT, SQUARE_TYPE.ASCENT, SQUARE_TYPE.ASCENT, SQUARE_TYPE.ASCENT, SQUARE_TYPE.ASCENT];
const U = [SQUARE_TYPE.ASCENT, SQUARE_TYPE.ASCENT, SQUARE_TYPE.FINISH, SQUARE_TYPE.FINISH, SQUARE_TYPE.FINISH, SQUARE_TYPE.FINISH];


// bend right
const j = [SQUARE_TYPE.ROAD, SQUARE_TYPE.ROAD];
const k = [SQUARE_TYPE.ROAD, SQUARE_TYPE.ROAD];
const o = [SQUARE_TYPE.ROAD, SQUARE_TYPE.ROAD];
const p = [SQUARE_TYPE.ROAD, SQUARE_TYPE.ROAD];
const r = [SQUARE_TYPE.ROAD, SQUARE_TYPE.ROAD];
const s = [SQUARE_TYPE.ROAD, SQUARE_TYPE.ROAD];
const J = [SQUARE_TYPE.ROAD, SQUARE_TYPE.ROAD];
const K = [SQUARE_TYPE.ASCENT, SQUARE_TYPE.ASCENT];
const O = [SQUARE_TYPE.ASCENT, SQUARE_TYPE.ASCENT];
const P = [SQUARE_TYPE.DESCENT, SQUARE_TYPE.DESCENT];
const R = [SQUARE_TYPE.ASCENT, SQUARE_TYPE.ASCENT];
const S = [SQUARE_TYPE.ROAD, SQUARE_TYPE.ROAD];


// bend left
const e = [SQUARE_TYPE.ROAD, SQUARE_TYPE.ROAD];
const g = [SQUARE_TYPE.ROAD, SQUARE_TYPE.ROAD];
const h = [SQUARE_TYPE.ROAD, SQUARE_TYPE.ROAD];
const i = [SQUARE_TYPE.ROAD, SQUARE_TYPE.ROAD];
const q = [SQUARE_TYPE.ROAD, SQUARE_TYPE.ROAD];
const t = [SQUARE_TYPE.ROAD, SQUARE_TYPE.ROAD];
const E = [SQUARE_TYPE.ASCENT, SQUARE_TYPE.ASCENT];
const G = [SQUARE_TYPE.ASCENT, SQUARE_TYPE.ASCENT];
const H = [SQUARE_TYPE.DESCENT, SQUARE_TYPE.DESCENT];
const I = [SQUARE_TYPE.ROAD, SQUARE_TYPE.ROAD];
const Q = [SQUARE_TYPE.ASCENT, SQUARE_TYPE.ASCENT];
const T = [SQUARE_TYPE.ROAD, SQUARE_TYPE.ROAD];

const AVENUE_CORSO_PASEO = {
    NAME: "Avenue Corso Paseo",
    TILES: [a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u]
};
const AVENUE_CORSO_PASEO_SHORT = {
    NAME: "Avenue Corso Paseo Short",
    TILES: [a, b, t, u]
};
const FIRENZE_MILANO = {
    NAME: "Firenze-Milano",
    TILES: [a, b, c, g, i, D, H, q, n, t, m, K, O, L, r, e, p, J, s, f, u]
};
const LA_HAUTE_MONTAGNE = {
    NAME: "La Haute Montagne",
    TILES: [a, b, c, f, i, m, e, t, K, G, L, H, J, s, d, o, p, R, Q, N, U]
};
const LE_COL_DU_BALLON = {
    NAME: "Le Col du Ballon",
    TILES: [A, n, L, H, g, c, e, q, t, r, M, B, o, i, p, j, D, F, k, S, u]
};
const RONDE_VAN_WELVEGEN = {
    NAME: "Ronde van Welvelgen",
    TILES: [a, b, c, m, g, f, t, e, q, o, n, L, P, j, k, I, D, H, r, S, u]
};
const LA_CLASSISISSIMA = {
    NAME: "La Classisissima",
    TILES: [A, e, b, Q, R, N, H, P, c, g, i, k, D, F, s, L, o, j, m, t, u]
};
const CLASSIQUE_DAVRIL = {
    NAME: "Classique d'Avril",
    TILES: [A, b, J, i, L, c, G, H, t, d, f, p, k, m, n, r, q, E, o, S, u]
};
const SPRINT_DE_MONTAGNE = {
    NAME: "Sprint de Montagne",
    TILES: [a, f, C, O, L, i, b, N, D, P, S, g, T, k, e, r, j, Q, H, m, u]
};
const VITTEL = {
    NAME: "Vittel - La Planche des Belles Filles",
    TILES: [a, I, H, d, T, F, l, j, s, M, N, P, B, C, O, R, K, G, Q, E, U]
};
const DOLE = {
    NAME: "Dole - Stations des Rousses",
    TILES: [a, j, f, M, E, C, T, K, s, q, R, L, P, H, i, D, B, N, O, g, u]
};
const NANTUA = {
    NAME: "Nantua - Chambery",
    TILES: [a, N, P, H, t, i, m, O, E, L, K, R, B, S, J, C, Q, D, F, g, u]
};
const PAU = {
    NAME: "Pau - Payragudes",
    TILES: [a, t, s, m, C, J, d, i, f, N, B, E, R, K, O, L, P, H, G, Q, U]
};
const ASGER = {
    NAME: "Col d'Asger",
    TILES: [a, c, P, H, F, B, l, j, I, d, K, Q, R, s, m, t, G, E, O, N, U]
};
const ENTRE_COTES = {
    NAME: "L'Entre-Côtes",
    TILES: [a, d, e, N, i, b, j, p, O, K, R, L, t, C, F, S, q, M, h, u]
};

export const TRACK = {
    AVENUE_CORSO_PASEO,
    AVENUE_CORSO_PASEO_SHORT,
    FIRENZE_MILANO,
    RONDE_VAN_WELVEGEN,
    LA_HAUTE_MONTAGNE,
    LE_COL_DU_BALLON,
    LA_CLASSISISSIMA,
    CLASSIQUE_DAVRIL,
    SPRINT_DE_MONTAGNE,
    VITTEL,
    DOLE,
    NANTUA,
    PAU,
    ASGER,
    ENTRE_COTES,
}