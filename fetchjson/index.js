"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var axios_1 = require("axios");
var url = 'https://jsonplaceholder.typicode.com/todos/1';
axios_1.default.get(url).then(function (response) {
    const todo = response.data;
    const id = todo.id;
    const title = todo.title;
    const finished = todo.finished;
    console.log(`
        The todo with ID: ${id}
        Has a title of: ${title}
        Is it finished? ${finished}
    `);
});
