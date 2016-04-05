var net = require('net');

var HOST = '192.168.1.6';
var PORT = 6969;

var client_socket = net.connect({port:PORT, host:HOST});

client_socket.on('connect', function() {
    console.log('connected to server!');
    console.dir(client_socket.address());
});

process.stdin.pipe(client_socket);

client_socket.on('data', function(chunk){
    console.log('Server: '+chunk);
});

//client_socket.setTimeout(50000, function(){
//    client_socket.end();
//});