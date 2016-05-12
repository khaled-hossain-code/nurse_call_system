var net = require('net');
var HOST = '192.168.1.6'; //server address to which beaglebone will be connected
var PORT = 6969; //server port address

var client_socket = net.connect({port:PORT, host:HOST});
var BBB = client_socket.address();
/*BBB = {
    address: '192.168.1.240',
    family: 'IPv4',
    port:60285
}*/



client_socket.on('connect', function() {
    console.log('connected to server!');
    console.log("Server => "+HOST+":"+PORT);
    console.log("Client => "+BBB.address+":"+BBB.port);
});

//process.stdin.pipe(client_socket); //this is for chatting

client_socket.on('data', function(chunk){
    console.log('Server: '+chunk);
    client_socket.write("I am fine. what about you?");
});

client_socket.on('end', function(){
   console.log("disconnected");
   //TODO have to reconnect
   
});

client_socket.on('timeout', function(){
   console.log("happened timeout due to idle");
   //TODO have to reconnect
});

//client_socket.setTimeout(50000, function(){
//    client_socket.end();
//});