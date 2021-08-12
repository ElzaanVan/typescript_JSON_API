///make a network request to fetch some JSON and print the result
import axios from 'axios';

const url = 'https://jsonplaceholder.typicode.com/todos/1';

//Typescript
//Interface is like an object - this one has 3 properties
interface Todo {
    id: number;
    title: string;
    completed: boolean;
}


axios.get(url).then(response => {
    //make response.data the Todo object 
    const todo = response.data as Todo;
    const ID = todo.id;
    const title = todo.title;
    const finished = todo.completed;

    console.log(`
    The Todo with ID: ${ID}
    Has a title of: ${title}
    Is it finished? ${finished}
    `);
});

//Compile typescript first before running in browser tsc nameOfFile.ts
//This will compile the TS into JavaScript
//You can run this in your terminal by running node index.js
//ts-node will automatically compile a TS file and run the JS file
//ts-node index.ts