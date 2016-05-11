var b = require('bonescript');
var buzzerDutyCycle = 0.5;
var buzzerFreq = 2000;
var callIndicationSound = "P8_19";

soundIndication(1000);

//this is a function to generate beep
//Description:- Whenever patient calls nurse its a sound indication to confirm that the call is happend. or any kind of error also generate sound
//inputs:- delay in milliseconds (the duration of how long the sound will be)
//outputs:- none
function soundIndication(milliseconds){ 
    b.analogWrite(callIndicationSound, buzzerDutyCycle, buzzerFreq);
    
    setTimeout(function() {
        b.analogWrite(callIndicationSound, 0);     // Turn off buzzer after milliseconds time 
    }, milliseconds);
}
