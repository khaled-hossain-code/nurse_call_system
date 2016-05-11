var i =0;
console.log(i);
var interval = setInterval(increament, 1000);

setTimeout(function(){
    clearInterval(interval);
console.log('interval cleared');
},5000);

function increament(){
                i++;
                console.log(i);
              }