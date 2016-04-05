///******* Modules ******************\\\
var b = require('bonescript');


// *********** Variables *************\\
var colors = ['red','green','blue','yellow','pink','cyan','white','off'];
var heartbitRate = 1000;
var state = b.LOW;

///********* pin Assigning ***********\\\
var heartbit = 'USR0';
var userLed1 = 'USR1';
var userLed2 = 'USR2';
var userLed3 = 'USR3';
//rgb led pin assign for Dome light
var ledRed  = "P9_18"; //10ohm resistor is connected
var ledBlue = "P9_22"; // 10ohm resistor is connected
var ledGreen = "P9_26"; // 10ohm resistor is connected


/// ******** pinMode setup ***********\\
// setting outputs of onboard LED
b.pinMode(heartbit,b.OUTPUT); // declearing user led 0 as output
b.pinMode(userLed1,b.OUTPUT);
b.pinMode(userLed2,b.OUTPUT);
b.pinMode(userLed3,b.OUTPUT);
// setting outputs of Dome light LED
b.pinMode(ledRed,  b.OUTPUT);
b.pinMode(ledBlue, b.OUTPUT);
b.pinMode(ledGreen, b.OUTPUT);


/// ****** Initial/setup Code ****** \\\



///*****************function call once************************ \\\
domeLight('off'); // At begining ward light is off


///*****************function loop************************ \\\ 
setInterval(hearRate, heartbitRate); //Checking the Heartbit
console.log('HeartBit started');
domeLight('red'); // turning on red light



/// ***************function Definition**********************\\\

// this is a function to turn on & off User led 0. To indicate that device is Alive
// inputs: none
// outputs: none
// used: used as a callback function with a interval of 1000ms 
function hearRate()  
{
    if (state == b.LOW) state = b.HIGH; //toggling heartbit
    else state = b.LOW;
        
    b.digitalWrite(heartbit, state); // here state can be 0 / 1.
}
// end of heartRate function

//This is a function to turn on Dome light. 
// Description:- this function takes color name as input and turn on the respective pins to turn on that color
// inputs :- 'red', 'green', 'blue', 'yellow', 'pink', 'white', default no color
// outputs:- none
function domeLight(color){
    
    switch (color) {
        case 'red': // red color
        b.digitalWrite(ledRed,  b.HIGH);
        b.digitalWrite(ledBlue, b.LOW);
        b.digitalWrite(ledGreen, b.LOW);
        break;
        case 'green': // green color
        b.digitalWrite(ledRed,  b.LOW);
        b.digitalWrite(ledBlue, b.LOW);
        b.digitalWrite(ledGreen, b.HIGH);
        break;
        case 'blue': // blue color
        b.digitalWrite(ledRed,  b.LOW);
        b.digitalWrite(ledBlue, b.HIGH);
        b.digitalWrite(ledGreen, b.LOW);
        break;
        case 'pink': // pink color
        b.digitalWrite(ledRed,  b.HIGH);
        b.digitalWrite(ledBlue, b.HIGH);
        b.digitalWrite(ledGreen, b.LOW);
        break;
        case 'cyan': // cyan color
        b.digitalWrite(ledRed,  b.LOW);
        b.digitalWrite(ledBlue, b.HIGH);
        b.digitalWrite(ledGreen, b.HIGH);
        break;
        case 'yellow': // yellow color
        b.digitalWrite(ledRed,  b.HIGH);
        b.digitalWrite(ledBlue, b.LOW);
        b.digitalWrite(ledGreen, b.HIGH);
        break;
        case 'white': // yellow color
        b.digitalWrite(ledRed,  b.HIGH);
        b.digitalWrite(ledBlue, b.HIGH);
        b.digitalWrite(ledGreen, b.HIGH);
        break;
        default:
        b.digitalWrite(ledRed,  b.LOW);
        b.digitalWrite(ledBlue, b.LOW);
        b.digitalWrite(ledGreen, b.LOW);
    }
    console.log(color);
}