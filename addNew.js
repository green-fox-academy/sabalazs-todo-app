import fs from 'fs';
import { filePath } from './config.js';
import { getList } from './getList.js';
import { printMessage } from './printMessage.js';
import { saveList } from './saveList.js';
import { Todo } from './TodoClass.js';

export function addNew(todo, file = filePath) {

    if (typeof(todo) === 'boolean') throw new Error("Nem lehetséges új feladat hozzáadása: nincs megadva a feladat!");

    
    let todoList = getList();
    todoList.push(new Todo(todoList.length + 1, todo));
    
    saveList(todoList);
    printMessage(`${todo} was added.`);

}