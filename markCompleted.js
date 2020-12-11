'use strict';

import { getList } from "./getList.js";
import { saveList } from "./saveList.js";

export function markCompleted(index) {

    const list = getList();
    list[index-1].completed = true;
    saveList(list);
    
}