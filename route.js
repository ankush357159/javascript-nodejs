"use strict";
const express = require("express");

const app = express();
const port = process.env.port || 1234;
const things = require("./routes/things");

app.use(express.json());
app.use("/things", things);
//use things.js file to handle endpoint that starts with route /things

app.get("/", (req, res) => {
	//handle root
	res.send("hello root");
});

app.listen(port, (err) => {
	if (err) {
		return console.log("Error", err);
	}
	console.log(`Listening on port ${port}`);
});
