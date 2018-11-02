function positionDisplay() {
        
    strokeWeight(4);
    stroke(0);
    noFill();
    ellipse(200, 275, tableD);
    noStroke();
    
}

class Seat {
    constructor(seatStart, seatEnd) {  
    this.seatStart = seatStart;
    this.seatEnd = seatEnd;
    }
    
    show() {
    strokeWeight(8);
    stroke(255);
    noFill();
    arc(200, 275, tableD, tableD, this.seatStart, this.seatEnd);
    noStroke();
    }
}

function playerPositions() {
        this.earlyStart = eStart;
        this.earlyEnd = eEnd;
        this.midStart = mStart;
        this.midEnd = mEnd;
        this.lateStart = lStart;
        this.lateEnd = lEnd;
    
        
        strokeWeight(8);
        stroke(255, 0, 0, 75);
        noFill();
        arc(200, 275, tableD, tableD, this.earlyStart, this.earlyEnd);
        noStroke();
    
        strokeWeight(8);
        stroke(255, 0, 255, 75);
        noFill();
        arc(200, 275, tableD, tableD, this.midStart, this.midEnd);
        noStroke();
        
        strokeWeight(8);
        stroke(0, 255, 0, 75);
        noFill();
        arc(200, 275, tableD, tableD, this.lateStart, this.lateEnd);
        noStroke();
    
}
    


//    strokeWeight(8);
//    stroke(0, 255, 0, 175);
//    noFill();
//    arc(200, 265, tableD - 20, tableD - 5, eStart, eEnd);
//    noStroke();
//    
//    strokeWeight(8);
//    stroke(255, 150, 0, 175);
//    noFill();
//    arc(200, 265, tableD - 30, tableD - 8, mStart, mEnd);
//    noStroke();
//    
//    strokeWeight(8);
//    stroke(255, 0, 0, 175);
//    noFill();
//    arc(200, 265, tableD - 40, tableD - 40, lStart, lEnd);
//    noStroke();