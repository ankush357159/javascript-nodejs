const yargs = require("yargs");

let command = yargs.argv._[0];
let params = yargs.argv;

if (command === "fly") {
	console.log("flying");
} else if (command === "drive") {
	if (params.speed && params.car) {
		console.log(`Driving ${params.car} at the speed of ${params.speed}`);
	} else {
		console.log("driving");
	}
}
