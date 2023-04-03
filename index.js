//Import the CLI function
const CLI = require("./lib/cli");

//create new CLI instance.
const cli = new CLI();

//call the .run() method.
//Instance methods can only be called on an instance of the class, not on the class itself.
cli.run();

//To call method directly on class use "static run() { //code here }"
