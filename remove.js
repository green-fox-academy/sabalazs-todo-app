'use strict';

import { getList } from "./getList.js";
import { saveList } from "./saveList.js";
import { printMessage } from "./printMessage.js";

export function remove(index) {

    if (typeof(index) !== 'number') throw new Error("Nem lehetséges az eltávolítás: nem adott meg indexet!");
    
    const list = getList();
    if (index < 1 || list.length < index) throw new Error("Nem lehetséges az eltávolítás: túlindexelési probléma adódott!");

    printMessage(`${list[index - 1].description} was removed.`);
    list.splice(index - 1,1);
    saveList(list);    
}