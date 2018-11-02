

function displayText() {
    
    textStyle(NORMAL);
    textSize(30);
    fill(0)
    text("Hand: " + hand[0] + ", " + hand[1], 10, 40);
    text("Action: " + handValue, 10, 70);
    textSize(25);
    text("First Card", 45, 500);
    text("Second Card", inputCard1.width + 25, 500);
    text("Position", 45, 559);
    
    textStyle(NORMAL);
    textSize(20);
    fill(0, 255, 0, 75);
    text("Early Position", 145, 260);
    fill(255, 0, 0, 75);
    text("Middle Position", 145, 300);
    fill(255, 0, 255, 75);
    text("Late Position", 145, 340);
    
    
}

function getHand() {
    
    inputCard1 = createInput();
    inputCard1.position(20, 520);
    
    inputCard2 = createInput();
    inputCard2.position(inputCard1.x + (inputCard1.width + 2), 520);
    
    inputpPos = createInput();
    inputpPos.position(20, 575);
    
    cardSubmit = createButton('submit');
    cardSubmit.position = (400, 550);
    cardSubmit.mousePressed(pushHand);
        
}

function pushHand() {
    
    clear();
    background(75, 75, 75, 155)
    handValue = 0;
    let testCard1 = inputCard1.value();
    let testCard2 = inputCard2.value();
    
        
    //Find first card in deck
    for (i = 0; i < fullDeck.length; i++) {
        if (testCard1 == fullDeck[i]) {
            hand[0] = fullDeck[i];
        }
    }
    //Find second card in deck
    for (j = 0; j < fullDeck.length; j++) {
        if (testCard2 == fullDeck[j]) {
            hand[1] = fullDeck[j];
        }
    }
    
    let tempHand = [];
        if (hand[0].v < hand[1].v) {
            tempHand[0] = hand[1];
            tempHand[1] = hand[0];
            hand[0] = tempHand[0];
            hand[1] = tempHand[1];
        }
    
    playerPos = inputpPos.value();
    if (playerPos = 'bttn') {
        eStart = 240;
        Late = true;
    } else if (playerPos = 'sb') {
        eStart = 200;
        Early = true;
    } else if (playerPos = 'bb') {
        eStart = 180;
        Early = true;
    } else if (playerPos = 'utg') {
        eStart = 140;
        Early = true;
    } else if (playerPos = 'utg+1') {
        eStart = 100;
        Middle = true;
    } else if (playerPos = 'mp') {
        eStart = 60;
        Middle = true;
    } else if (playerPos = 'mp+1') {
        eStart = 20
        Middle = true;
    } else if  (playerPos = 'ct') {
        eStart = -20;
        Late = true;
    } else if (playerPos = 'hj') {
        eStart = -60;
        Late = true;
    }
    background(75, 75, 75, 155)
    console.log(Early)
    console.log(Middle)
    console.log(Late)
    
    handEval();
}