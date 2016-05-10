///******* Modules ******************\\\
var b = require('bonescript');

// *********** Variables *************\\
var colors = ['red','green','blue','yellow','pink','cyan','white','off'];
var state = b.LOW;
var heartbitRate = 1000;
var nurseCalled = 1;

///********* pin Assigning ***********\\\
var heartbit = 'USR0';
var userLed1 = 'USR1';
var userLed2 = 'USR2';
var userLed3 = 'USR3'; 
var heartbitRate = 1000;
//Red green led pin assign for patient call point
var ledRed  = "P8_7"; //10ohm resistor is connected
var ledGreen = "P8_9"; // 10ohm resistor is connected
var pendant_button = "P9_16"; // pendant is the input of patient to call the nurse , this pin is pulled low externally by a 7.5k ohm res
// setting outputs of wardlight LED
b.pinMode(ledRed,  b.OUTPUT);
b.pinMode(ledGreen, b.OUTPUT);
b.pinMode(pendant_button,b.INPUT);

///*****************function call once************************ \\\
setInterval(hearRate, heartbitRate); //Checking the Heartbit
console.log('HeartBit started');
patientCallPointLight('green');
b.attachInterrupt(pendant_button, true, b.RISING, callNurse);//input of pendant is interrupt driven, RISING, FALLING, CHANGE, whenever from low pin goes to high it calls callNurse function.
console.log("Ready to take input");


//this function get called when pendant is pressed, 
// tasks: 1. turn on green ward light,2.sound notification of button press for visible disabled people 3.notify server that pendant is pressed
// input: object with interrupt information, x is the object here
// output: none
function callNurse(x)
{
    // console.log(JSON.stringify(x)); 
    // x is {"pin":{"name":"GPIO1_28","gpio":60,"mux":"gpmc_ben1","eeprom":36,"key":"P9_12","muxRegOffset":"0x078","options":["gpmc_ben1","mii2_col","NA","mmc2_dat3","NA","NA","mcasp0_aclkr","gpio1_28"]},"attached":true}
    
     if(x.value === 1) // x.value gives the value of pin. is it high or low
     {
        patientCallPointLight('green'); //task 1 is completed green light is turned on
        // task 2 need to generate sound as a confirmation of button pressed
        // task 3 need to be done notify server
        console.log("Nurse Called "); // display confirmation & number of patient call
    }
}


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
//This is a function to turn on  patient call point light. 
// Description:- this function takes color name as input and turn on the respective pins to turn on that color
// inputs :- 'red', 'green', default no color
// outputs:- none
function patientCallPointLight(color){
    
    switch (color) {
        case 'red': // red color
        b.digitalWrite(ledRed,  b.HIGH);
        b.digitalWrite(ledGreen, b.LOW);
        break;
        case 'green': // green color
        b.digitalWrite(ledRed,  b.LOW);
        b.digitalWrite(ledGreen, b.HIGH);
        break;
        default:
        b.digitalWrite(ledRed,  b.LOW);
        b.digitalWrite(ledGreen, b.LOW);
    }
    console.log(color);
}
