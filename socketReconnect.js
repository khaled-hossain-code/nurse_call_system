var net = require('net');
var HOST = '192.168.1.251';
var PORT = 6969;
var client = new net.Socket();

var reconnect = function() {
            client.connect(PORT, HOST, function(){
                console.log('CONNECTED TO: ' + HOST + ':' + PORT);
                client.write('I am the inner superman');
            });
        };


client.connect(PORT, HOST, function(){            
    
    console.log('CONNECTED TO: ' + HOST + ':' + PORT);
    client.write('I am BBB');
    console.log('I am connecting for the first time');
    clearInterval(reconnect);
});


client.on('error', function(e) {
    if(e.code == 'ECONNREFUSED') {
        console.log('Is the server running at ' + PORT + '?');

        setInterval(reconnect, 5000);

        console.log('Timeout for 5 seconds before trying port:' + PORT + ' again');

    }   
});

client.on('data', function(data) {
    console.log('DATA: ' + data);
    //client.destroy();
});

client.on('close', function() {
    console.log('Connection closed');
});