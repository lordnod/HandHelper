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

const fullDeck = [];
let hand = [];
let handValue;

let inputCard1;
let inputCard2;
let cardSubmit;

let suitedVal = 4;
let pocketPairVal = 5;
let pocketConnectVal = 4;
let suitedConnectVal = 2;
    
let preFlopVal = 0;
let postFlopVal = 0;
let turnVal = 0;
let riverVal = 0;
    
let suitedHand = false;
let pocketConnectors = false;;
let pocketPair = false;

const positions = ['sb', 'bb', 'utg', 'utg+1', 'mp', 'mp+1', 'hj', 'ct', 'bttn'];
let Early = false;
let Middle = false;
let Late = false;

const actions = ['Fold', 'Call', 'Raise', '3 Bet']

let tableD = 360;

let seats = [];

let seatStart = 0;
let seatEnd = seatStart + 20;

let eStart = 240;

let eEnd = eStart + 100;
let mStart = eEnd + 20;
let mEnd = mStart + 100;
let lStart = mEnd + 20;
let lEnd = lStart + 100;

let playerPos;