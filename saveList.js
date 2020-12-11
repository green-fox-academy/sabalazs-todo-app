'use strict';
import fs from 'fs';
import { filePath } from './config.js';
import { printMessage } from './printMessage.js';

export function saveList(list, file = filePath) {
    fs.writeFileSync(file, JSON.stringify(list, null, 4));
}