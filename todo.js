'use strict';

import minimist from 'minimist';
import { getList } from './getList.js';
import { printMessage } from './printMessage.js';
import { addNew } from './addNew.js';
import { remove } from './remove.js';
import { markCompleted } from './markCompleted.js';

const args = minimist(process.argv);
try {
    if (args.l) {
        printTodoList();
    } else if (args.a) {
        addNew(args.a);
    } else if (args.r) {
        remove(args.r);
    } else if (args.c) {
        markCompleted(args.c);
    } else {
        if (Object.keys(args).length > 1) printMessage('Nem támogatott argumentum!');
        printManual();
    }
} catch(error) {
    printMessage(error.message);
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
    let list = getList();

    //checking for empty todo list
    if (list.length === 0) {
        printMessage('Nincs mára tennivalód!');
        return;
    }
    //printing
    for (let i = 0; i < list.length; i++) {
        printMessage(`${i + 1}. - ${list[i].completed ? '[x]' : '[ ]'} ${list[i].description}`);
    }
}