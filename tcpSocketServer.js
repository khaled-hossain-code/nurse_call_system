var net = require('net');

var HOST = '192.168.1.6';
var PORT = 6969;

var server = net.createServer(function (socket) { 
    
    // We have a connection - a socket object is assigned to the connection automatically
    console.log('CONNECTED: ' + socket.remoteAddress + ':' + socket.remotePort);

});


server.on('connection', function (server_socket) {
    console.log('client connected');
    server_socket.write('hello client! Say something.');
    //server_socket.pipe(server_socket);
    
    process.stdin.pipe(server_socket);
    
    server_socket.on('data', function (chunk) {
        console.log('BeagleBone: ' + chunk);
    });
        
    server_socket.on('end', function () {
        console.log('client disconnected');
    });
});

server.listen(PORT, HOST);



server.on('listening', function () {
    console.log('server accepting connections');

    console.log('Server listening on ' + server.address().address + ':' + server.address().port);
});

server.on('error', function(error){
console.dir(error);
});

