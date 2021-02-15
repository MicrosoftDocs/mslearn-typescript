"use strict";
exports.__esModule = true;
var greetings_module_js_1 = require("./greetings_module.js"); // imports a single function in the module
var allGreetingFunctions = require("./greetings_module.js"); // imports all exported components in the module
var greetings_utilities_module_js_1 = require("./greetings-utilities_module.js");
greetings_module_js_1.returnGreeting('Hola!'); // Displays 'The message from Greetings_module is Hola!'
allGreetingFunctions.returnGreeting('Bonjour'); // Displays 'The message from Greetings_module is Bonjour!'
greetings_utilities_module_js_1.returnGreeting('Ciao!'); // Displays 'The message from GreetingsWithLength_module is Ciao! It is 5 characters long.'
