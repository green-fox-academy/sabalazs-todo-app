import fs from 'fs';
import { filePath } from './config.js';
import { printMessage } from './printMessage.js';

export function addNew(todo, file = filePath) {

    if (fs.existsSync(file)) {
        fs.appendFileSync(file, `;\n${todo}`);
    } else {
        fs.writeFileSync(file, '');
        fs.appendFileSync(file, `${todo}`);
    }
    printMessage(`${todo} was added.`);
}