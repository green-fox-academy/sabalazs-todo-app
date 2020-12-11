'use strict';

import fs from 'fs';
import { Todo } from './TodoClass.js';
import { filePath } from './config.js';

//getting todo list from the provided file and returning it as an array of Todo objects. if the file doesnt exist, its created
export function getList(file = filePath) {

    let list = [];
    if (fs.existsSync(file)) {
        list = JSON.parse(fs.readFileSync(file, 'utf8'));
    } else {
        fs.writeFileSync(file, '[]');
    }
        
    for (let i = 0; i < list.length; i++) {
        list[i] = new Todo(list[i].id, list[i].description, list[i].completed);
    }
    return (list);
    
}