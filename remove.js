'use strict';

import { getList } from "./getList.js";
import { saveList } from "./saveList.js";
import { printMessage } from "./printMessage.js";

export function remove(index) {

    if (typeof(index) !== 'number') throw new Error("Nem lehetséges az eltávolítás: nem adott meg indexet!");

    const newList = getList();
    printMessage(`${newList[index - 1].description} was removed.`);
    newList.splice(index - 1,1);
    saveList(newList);    
}