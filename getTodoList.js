'use strict';

import fs from 'fs';

//getting todolist from the provided file and returning it as an array. if file doesnt exist, its created
export function getTodoList(file) {

    let todoList = [];
    if (fs.existsSync(file)) {
        todoList = fs.readFileSync(file, 'utf8').split(';');
    } else {
        fs.writeFileSync(file, '');
    }

    //removing line breaks
    todoList.forEach((element, index) => todoList[index] = todoList[index].trim());

    //removing last element if its empty
    if (todoList[todoList.length - 1] === '') todoList.pop();

    return (todoList);
}