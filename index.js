"use strict";
exports.__esModule = true;
///make a network request to fetch some JSON and print the result
var axios_1 = require("axios");
var url = 'https://jsonplaceholder.typicode.com/todos/1';
axios_1["default"].get(url).then(function (response) {
    //make response.data the Todo object 
    var todo = response.data;
    var ID = todo.id;
    var title = todo.title;
    var finished = todo.completed;
    console.log("\n    The Todo with ID: " + ID + "\n    Has a title of: " + title + "\n    Is it finished? " + finished + "\n    ");
});
//Compile typescript first before running in browser tsc nameOfFile.ts
//This will compile the TS into JavaScript
//You can run this in your terminal by running node index.js
//ts-node will automatically compile a TS file and run the JS file
//ts-node index.ts
