'use strict';
import fs from 'fs';
import { filePath } from './config.js';
import { printMessage } from './printMessage.js';

export function saveList(list, file = filePath) {
    fs.writeFileSync(file, '');
    list.forEach((element) => {
        fs.appendFileSync(file, `${element.description};\n`);
    });
}