'use strict';

import { getList } from "./getList.js";
import { saveList } from "./saveList.js";
import { validateIndex } from "./validateIndex.js";

export function markCompleted(index) {

    validateIndex(index);
    const list = getList();
    list[index-1].completed = true;
    saveList(list);

}