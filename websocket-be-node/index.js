const {WebSocketServer} = require("ws");
const wss = new WebSocketServer({ port: 8080 });

wss.on('connection', function connection(ws, request) {
	wss.clients.forEach(client => {
		client.send(`새로운 유저가 접속했습니다. 현재 유저 ${wss.clients.size} 명`)
	})

	ws.on('error', console.error);

	ws.on('message', function message(data) {
		wss.clients.forEach(client => {
			client.send(JSON.stringify(JSON.parse(data)))
		})
	});
});
