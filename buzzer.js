var b = require('bonescript');
var buzzerDutyCycle = 0.5;
var buzzerFreq = 1000;
var callIndicationSound = 'P8_19';

b.pinMode(callIndicationSound,  b.ANALOG_OUTPUT);

soundIndication(1000);

//this is a function to generate beep
//Description:- Whenever patient calls nurse its a sound indication to confirm that the call is happend. or any kind of error also generate sound
//inputs:- delay in milliseconds (the duration of how long the sound will be)
//outputs:- none
function soundIndication(milliseconds){ 
    try{
        console.log("inside try block");
        //setInterval(function(){console.log("running"), 10000});
        b.analogWrite(callIndicationSound, buzzerDutyCycle, buzzerFreq, printJSON);
    }
    catch(err)
    {
        console.log("inside catch err block");
        //b.analogWrite(callIndicationSound, 0);
        //b.analogWrite(callIndicationSound, buzzerDutyCycle, buzzerFreq);
    }
    
    setTimeout(function() {
        console.log("inside setTimeout block");
        b.analogWrite(callIndicationSound, 0);     // Turn off buzzer after milliseconds time 
    }, milliseconds);
}


function printJSON(x) { 
    if(x.err)
    {
        b.digitalWrite(callIndicationSound, 0);
        console.log("error happend");
    }
    console.log(JSON.stringify(x)); 
    
}