function setup() {
    
    let canvas = createCanvas(w, h);
    canvas.parent('sketchHolder')
    background(75, 75, 75, 155)
    angleMode(DEGREES);

    for (let f in faces) for (let s in suits) fullDeck.push(new Card({ f: f, s: s }));
        
    tableDisplay();
    
    

}


function draw() {
 
    
 
}