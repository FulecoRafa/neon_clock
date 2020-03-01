let hr, mn, sec;
let d, m, y;

function setup(){
    createCanvas(800, 800);
}

function draw(){
    background(0);
    hr = hour(); mn = minute(); sec = second();
    d = day(); m = month(); y = year();
    strokeWeight(8)
    noFill();
    stroke(255, 0, 0);
    arc(400, 400, 360, 360, -PI/2, ((hr/24)*2*PI-PI/2));
    stroke(0, 255, 0);
    arc(400, 400, 340, 340, -PI/2, ((mn/60)*2*PI-PI/2));
    stroke(0, 0, 255);
    arc(400, 400, 320, 320, -PI/2, ((sec/60)*2*PI-PI/2));
    strokeWeight(1);
    textSize(65)
    fill(255, 100, 100)
    stroke(255, 100, 100);
    let secStr = (sec<10)? '0' + sec.toString() : sec ;
    let mnStr = (mn<10)? '0' + mn.toString() : mn ;
    let hrStr = (hr<10)? '0' + hr.toString() : hr ;
    let time = `${hrStr}:${mnStr}:${secStr}`;
    text(time, 250, 420);
    textSize(50)
    let dStr = (d<10)? '0' + d.toString() : d ;
    let mStr = (m<10)? '0' + m.toString() : m ;
    let yStr = (y<10)? '0' + y.toString() : y ;
    let data = `${dStr}/${mStr}/${yStr}`;
    text(data, 250, 50);
}