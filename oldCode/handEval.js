function handEval() {
    handValue = 0; 
    //Pre-Flop Value 
    if (hand[0].f == hand[1].f) {
        preFlopVal = preFlopVal + pocketPairVal;
        pocketPair = true;  
        console.log("Pocket Pair: " + pocketPair);
    } else if (hand[0].s == hand[1].s) {
        preFlopVal = preFlopVal + suitedVal;
        suitedHand = true;
        console.log("Suited Hand: " + suitedHand);
    }
    if (Math.abs(hand[0].v - hand[1].v) == 1) {
        preFlopVal = postFlopVal + pocketConnectVal;
        pocketConnectors = true;
        console.log("Pocket Connectors: " + pocketConnectors);
    }
    if (suitedHand == true && pocketConnectors == true) {
        preFlopVal = preFlopVal + suitedConnectVal;
    }
    if (Math.abs(hand[0].v - hand[1].v) > 4) {
        preFlopVal = preFlopVal + -5;
    }
        
    handValue = (hand[0].v + hand[1].v) + preFlopVal;

}