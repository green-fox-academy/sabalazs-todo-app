'use strict';

import minimist from 'minimist';
import fs from 'fs';


const args = minimist(process.argv.slice(2));

if (args.l) {
    printTodoList();
} else {
    printManual();
}

function printManual() {
    console.log('\nParancssori Todo applikáció');
    console.log('===============================\n');
    console.log('Parancssori argumentumok:');
    console.log('-l   Kilistázza a feladatokat');
    console.log('-a   Új feladatot ad hozzá');
    console.log('-r   Eltávolít egy feladatot');
    console.log('-c   Teljesít egy feladatot');
}

function printTodoList() {
    //reading from file
    let todoList = fs.readFileSync('todo-data.txt', 'utf8').split(';');
    
    //checking for empty todo list
    if (todoList.length <= 1 && !todoList[0]) {
        console.log('Nincs mára tennivalód!');
        return;
    }

    //removing line breaks
    todoList.forEach((element, index) => todoList[index] = todoList[index].trim());

    //printing
    todoList.forEach((item, index) => console.log(`${index + 1}. - ${item}`));
}