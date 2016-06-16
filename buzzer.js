var b = require('bonescript');
var buzzerDutyCycle = 0.5;
var buzzerFreq = 2000;
var callIndicationSound = 'P8_19';

b.pinMode(callIndicationSound,  b.ANALOG_OUTPUT);

b.analogWrite(callIndicationSound, buzzerDutyCycle, buzzerFreq);

setTimeout(function() {
        console.log("inside setTimeout block");
        b.analogWrite(callIndicationSound, 0);     // Turn off buzzer after milliseconds time 
    }, 2000);
