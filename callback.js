const fs = require("fs");

// Following is an example of callback function
// A callback is a function which is called when a task is completed, thus helps in preventing any
// kind of blocking. Callback function allows other code to run in the meantime.

fs.readFile("example1.txt", (err, fileData) => {
	if (err) return console.error(err);
	console.log(fileData.toString());
});
console.log("End of program");
