'use strict';

import { getTodoList } from "./getTodoList.js";
import { saveList } from "./saveList.js";

export function remove(index) {
    const newList = getTodoList();
    newList.splice(index + -1,1);
    saveList(newList);
}