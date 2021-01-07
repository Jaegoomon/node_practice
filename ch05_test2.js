var http = require('http');

// 웹 서버 객체 만들기
var server = http.createServer();

// 웹 서버를 시작하여 2002번 포트에서 대기하도록 설정합니다.
var port = 2002;
var host = '192.249.18.236'
server.listen(port, host, function() {
    console.log('웹 서버가 시작되었습니다. : %d', port)
});

// 클라이언트 연결 이벤트 처리
server.on('connection', function(socket) {
    var addr = socket.address();
    console.log('클라이언트가 접속했습니다. : %s. %d', addr.address, addr.port)
});