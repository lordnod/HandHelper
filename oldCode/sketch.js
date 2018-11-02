function setup() {
    
    let canvas = createCanvas(400, 600);
    canvas.parent('sketchHolder')
    background(75, 75, 75, 155)
    angleMode(DEGREES);

    for (let f in faces) for (let s in suits) fullDeck.push(new Card({ f: f, s: s }));
    
    hand = [];
    getHand();
     
}


function draw() {
        
    displayText();
    
    if (handValue < 0) {
        handValue = 0;
    }
    
    positionDisplay();
    
    for (i = 0; i < 9; i++) {
        seats[i] = new Seat(seatStart, seatEnd);
        seats[i].show();
        seatStart = seatStart + 40;
        seatEnd = seatStart + 20;
        
    }
    
    playerPositions();
}