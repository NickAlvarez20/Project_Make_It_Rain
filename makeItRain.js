//where rain should start
var xPositions = [200];
var yPositions = [0];

//main for loop for rain
for(var j = 0; j < 40; j++){
    xPositions.push (random(0,399));
    yPositions.push (random(0,-400));
    
}
//draw canvas for rain
draw = function() {
    background(204, 247, 255);

    noStroke();
    fill(0, 200, 255);
//changes direction of rain
    for (var i = 0; i < xPositions.length; i++) {
        ellipse(xPositions[i], yPositions[i], 10, 10);
        yPositions[i] += 5;
        xPositions[i] += -4;
        if(yPositions[i] > 400){ yPositions[i] = -10;}
        if(xPositions[i] < 0){ xPositions[i] = 410;}
    }
    
    
};
