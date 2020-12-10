'use strict';

import minimist from 'minimist';
import fs from 'fs';

const fileName = "./data/" + "example.txt";
const args = minimist(process.argv);

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
    //reading from file and creating it, if it doesnt exist
    let todoList = [];
    if (fs.existsSync(fileName)) {
        todoList = fs.readFileSync(fileName, 'utf8').split(';');
    } else {
        fs.writeFileSync(fileName, '');
    }
    
    //checking for empty todo list
    if (todoList.length <= 1 && !todoList[0]) {
        console.log('Nincs mára tennivalód!');
        return;
    }

    //removing line breaks
    todoList.forEach((element, index) => todoList[index] = todoList[index].trim());

    //removing last element if its empty
    if (todoList[todoList.length-1] === '') todoList.pop();

    //printing
    todoList.forEach((item, index) => console.log(`${index + 1}. - ${item}`));
}