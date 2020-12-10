'use strict';

import { getTodoList } from "./getTodoList.js";
import { saveList } from "./saveList.js";
import { printMessage } from "./printMessage.js";

export function remove(index) {
    const newList = getTodoList();
    printMessage(`${newList[index - 1].description} was removed.`);
    newList.splice(index - 1,1);
    saveList(newList);    
}