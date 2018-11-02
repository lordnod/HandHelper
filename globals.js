let w = 400;
let h = 700;

const faces = {
    '2': { v: 2 },
    '3': { v: 3 },
    '4': { v: 4 },
    '5': { v: 5 },
    '6': { v: 6 },
    '7': { v: 7 },
    '8': { v: 8 },
    '9': { v: 9 },
   '10': { v: 10 },
    'J': { v: 11 },
    'Q': { v: 12 },
    'K': { v: 13 },
    'A': { v: 14 }
};

const suits = {
    s: {}, h: {}, c: {}, d: {}
};

class Card {
    constructor(opt = {}) {
        this._f = opt.f;
        this._s = opt.s;
        this._v = opt.v;
    }

    get f() {
        return this._f;
    }

    get s() {
        return this._s;
    }

    get v() {
        return this._v || faces[this._f].v;
    }

    toString() {
        return this.f + this.s;
    }
}

const fullDeck = [];

let tableD = 270;
let seats = [];
let seatStart = 0;
let seatEnd = seatStart + 20;
let positionMarkers = [];
let positionStart = 0;
let positionEnd = positionStart + 20;