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