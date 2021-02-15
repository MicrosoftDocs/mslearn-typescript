"use strict";
exports.__esModule = true;
exports.returnGreeting = void 0;
// Returns the value of a parameter and the parameter length to the console.
function returnGreeting(greeting) {
    var greetingLength = getLength(greeting);
    console.log("The message from namespace GreetingsWithLength is " + greeting + ". It is " + greetingLength + " characters long.");
}
exports.returnGreeting = returnGreeting;
function getLength(message) {
    return message.length;
}
