var b = require('bonescript');

var pendant_button = "P9_12"; // pendant is the input of patient to call the nurse , this pin is pulled low externally by a 7.5k ohm res

b.pinMode(pendant_button,b.INPUT); // this input only accepts high input
b.attachInterrupt(pendant_button, true, b.FALLING, nursePresence);
console.log("ready to take input");


function nursePresence(y){
    // console.log(JSON.stringify(x)); 
    // y is {"pin":{"name":"GPIO1_28","gpio":60,"mux":"gpmc_ben1","eeprom":36,"key":"P9_12","muxRegOffset":"0x078","options":["gpmc_ben1","mii2_col","NA","mmc2_dat3","NA","NA","mcasp0_aclkr","gpio1_28"]},"attached":true}
    
    if(y.value === 0) // if this condition is not used then at initialization nursePresence runs automatically once
    {
        console.log("nurse presence button pressed");
    }
}