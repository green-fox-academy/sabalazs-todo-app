'use strict';

import fs from 'fs';
import { Todo } from './TodoClass.js';
import { filePath } from './config.js';

//getting todo list from the provided file and returning it as an array of Todo objects. if the file doesnt exist, its created
export function getList(file = filePath) {

    let todoList = [];
    if (fs.existsSync(file)) {
        todoList = JSON.parse(fs.readFileSync(file, 'utf8'));
    } else {
        fs.writeFileSync(file, '[]');
    }
        
    for (let i = 0; i < todoList.length; i++) {
        todoList[i] = new Todo(todoList[i].id, todoList[i].description, todoList[i].urgent);
    }
    
    return (todoList);
}