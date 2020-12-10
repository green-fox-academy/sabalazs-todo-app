'use strict';

import minimist from 'minimist';
import { getTodoList } from './getTodoList.js';
import { printMessage } from './printMessage.js';
import { filePath } from './config.js';

const args = minimist(process.argv);

if (args.l) {
    printTodoList();
} else {
    printManual();
}

function printManual() {
    printMessage('\nParancssori Todo applikáció');
    printMessage('===============================\n');
    printMessage('Parancssori argumentumok:');
    printMessage('-l   Kilistázza a feladatokat');
    printMessage('-a   Új feladatot ad hozzá');
    printMessage('-r   Eltávolít egy feladatot');
    printMessage('-c   Teljesít egy feladatot');
}

function printTodoList() {
    let todoList = getTodoList(filePath);

    //checking for empty todo list
    if (todoList.length === 0) {
        printMessage('Nincs mára tennivalód!');
        return;
    }
    //printing
    todoList.forEach((item) => printMessage(`${item.id}. - ${item.description}`));
}