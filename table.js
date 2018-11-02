function tableDisplay() {

    seatDisplay();
    positionMarkerDisplay();
    //dealerButtonIcon();

}

class Seat {
    
    constructor(seatStart, seatEnd) {  
        this.seatStart = seatStart;
        this.seatEnd = seatEnd;
    }
    
    show() {
        strokeWeight(8);
        stroke(255, 255, 255, 255);
        noFill();
        arc(w / 2, h / 2, tableD, tableD, this.seatStart, this.seatEnd);
        noStroke();
    }

}

function seatDisplay() {
        
    strokeWeight(4);
    stroke(0);
    noFill();
    ellipse(w / 2, h / 2, tableD, tableD);
    noStroke();
    
    for (i = 0; i < 9; i++) {
        seats[i] = new Seat(seatStart, seatEnd);
        seatStart = seatStart + 40;
        seatEnd = seatStart + 20;
        seats[i].show();
    }
              
    textStyle(NORMAL);
    textSize(20)
    strokeWeight(1)
    stroke(0, 0, 0, 0);
    fill(255, 255, 255, 155);
    textAlign(CENTER);
    text("Player", w / 2, ((h / 2 + (tableD / 2) + 25)));
    
}

class positionMarker {
    
    constructor(positionStart, positionEnd) {  
        this.posStart = positionStart;
        this.posEnd = positionEnd;
        this.rVal = 0;
        this.bVal = 0;
        this.gVal = 0;
    }
    
    show() {
        strokeWeight(8);
        stroke(this.rVal, this.bVal, this.gVal, 125);
        noFill();
        arc(w / 2, h / 2, tableD, tableD, this.posStart, this.posEnd);
        noStroke();
    }

}

function positionMarkerDisplay() {    
  
    for (i = 0; i < 9; i++) {
        positionMarkers[i] = new positionMarker(positionStart, positionEnd);
        positionStart = positionStart + 40;
        positionEnd = positionStart + 20;
        positionMarkers[i].show();
    }

    dealerButtonIcon();

}

function dealerButtonIcon() {
    let buttonX = w / 2;
    let buttonY = ((h / 2 + (tableD / 2)) - 18);
    strokeWeight(1);
    stroke(0);
    noFill(255, 255, 255, 175);
    ellipse(buttonX, buttonY, 20, 20);
    noStroke();
    textStyle(NORMAL);
    textSize(20)
    strokeWeight(1)
    stroke(0, 0, 0, 0);
    fill(255, 255, 255, 155);
    textAlign(CENTER);
    text("D", buttonX, (buttonY + 8));
    noStroke();
}