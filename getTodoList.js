'use strict';

import fs from 'fs';
import { Todo } from './TodoClass.js';
import { filePath } from './config.js';

//getting todo list from the provided file and returning it as an array of Todo objects. if the file doesnt exist, its created
export function getTodoList(file = filePath) {

    let todoList = [];
    if (fs.existsSync(file)) {
        todoList = fs.readFileSync(file, 'utf8').split(';');
    } else {
        fs.writeFileSync(file, '');
    }
        
    for (let i = 0; i < todoList.length; i++) {
        todoList[i] = new Todo(i+1, todoList[i].trim());
    }

    //removing last element if its empty
    if (todoList.length > 0 && todoList[todoList.length - 1].description === '') todoList.pop();

    return (todoList);
}