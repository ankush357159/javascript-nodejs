// json file can be read with two methods - using require method and using fs module
const users = require("./users.json"); //Reading json file

console.log("Getting users data by require() method: \n", users);

// node.js fs module is used to read file

const fs = require("fs");

fs.readFile("users.json", function (error, data) {
	if (error) throw error;

	//fs module returns file content in string format so we need to convert it into JSON format
	//by using JSON.parse()

	const users = JSON.parse(data);
	console.log("\nGetting users data with fs module: \n", users);

	let newUser = {
		name: "new Name",
		age: 25,
		languages: ["Go", "Python", "Ruby"],
	};

	//adding new data to the users object
	users.push(newUser);

	//writing to a file
	fs.writeFile("users.json", JSON.stringify(users), (error) => {
		if (error) throw error;

		console.log("New user data added to object");
	});

	// Getting data again after writing to file
	console.log("\nGetting users data after adding new data: \n", users);
});
