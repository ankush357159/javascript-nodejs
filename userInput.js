"use strict";

//prompt() method is available in javascript to get user input but only avaialable in browser.
// node-sync provides functionality of synchronous sync in node js
// also avaialable outside browser

const prompt = require("prompt-sync")({ sigint: true });

// signal interupt value above allows to interupt the function without any output

let name = prompt("Enter your name: ");
console.log(`Hello ${name}`);
