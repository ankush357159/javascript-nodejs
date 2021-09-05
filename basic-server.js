const http = require("http"); //node module for creating server
const users = require("./users.json");

const server = http.createServer((req, res) => {
	res.setHeader("Content-type", "application/json");
	res.setHeader("Access-Control-Allow-Origin", "*"); //to avoid cors issues
	res.writeHead(200); //status code

	//let dataObj = { id: 123, name: "Ankush", email: "ankush@work.org" };
	let data = JSON.stringify(users);
	res.end(data); //res.end() method ends the response process
	//and prompts browser to render the response
});

server.listen(1234, () => {
	console.log("Listening on port 1234");
});
