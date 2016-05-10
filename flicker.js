///******* Modules ******************\\\
var b = require('bonescript');
// Import events module
var events = require('events');

//rgb led pin assign for ward light
var wardLightRed  = "P9_18"; //10ohm resistor is connected
var wardLightBlue = "P9_22"; // 10ohm resistor is connected
var wardLightGreen = "P9_26"; // 10ohm resistor is connected
var pendant_button = "P9_12"; 
var cancel_button = "P9_16";
// setting outputs of wardlight LED
b.pinMode(wardLightRed,  b.OUTPUT);
b.pinMode(wardLightBlue, b.OUTPUT);
b.pinMode(wardLightGreen, b.OUTPUT);
b.pinMode(pendant_button,b.INPUT);
b.pinMode(cancel_button,b.INPUT);
///*****************function call once************************ \\\
addLoop(function(){
    console.log("hello");
});

function wardLight(color){
    
    switch (color) {
        case 'red': // red color
        b.digitalWrite(wardLightRed,  b.HIGH);
        b.digitalWrite(wardLightBlue, b.LOW);
        b.digitalWrite(wardLightGreen, b.LOW);
        break;
        case 'green': // green color
        b.digitalWrite(wardLightRed,  b.LOW);
        b.digitalWrite(wardLightBlue, b.LOW);
        b.digitalWrite(wardLightGreen, b.HIGH);
        break;
        case 'blue': // blue color
        b.digitalWrite(wardLightRed,  b.LOW);
        b.digitalWrite(wardLightBlue, b.HIGH);
        b.digitalWrite(wardLightGreen, b.LOW);
        break;
        case 'pink': // pink color
        b.digitalWrite(wardLightRed,  b.HIGH);
        b.digitalWrite(wardLightBlue, b.HIGH);
        b.digitalWrite(wardLightGreen, b.LOW);
        break;
        case 'cyan': // cyan color
        b.digitalWrite(wardLightRed,  b.LOW);
        b.digitalWrite(wardLightBlue, b.HIGH);
        b.digitalWrite(wardLightGreen, b.HIGH);
        break;
        case 'yellow': // yellow color
        b.digitalWrite(wardLightRed,  b.HIGH);
        b.digitalWrite(wardLightBlue, b.LOW);
        b.digitalWrite(wardLightGreen, b.HIGH);
        break;
        case 'white': // yellow color
        b.digitalWrite(wardLightRed,  b.HIGH);
        b.digitalWrite(wardLightBlue, b.HIGH);
        b.digitalWrite(wardLightGreen, b.HIGH);
        break;
        default:
        b.digitalWrite(wardLightRed,  b.LOW);
        b.digitalWrite(wardLightBlue, b.LOW);
        b.digitalWrite(wardLightGreen, b.LOW);
    }
    console.log("ward light:" + color);
        
}
