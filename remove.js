'use strict';

import { getList } from "./getList.js";
import { saveList } from "./saveList.js";
import { printMessage } from "./printMessage.js";
import { validateIndex } from "./validateIndex.js";

export function remove(index) {

    validateIndex(index);
    const list = getList();
    printMessage(`"${list[index - 1].description}" was removed.`);
    list.splice(index - 1,1);
    saveList(list);

}