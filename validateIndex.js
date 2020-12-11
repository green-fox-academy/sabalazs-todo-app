'use strict';

import { getList } from './getList.js';

export function validateIndex(index) {

    if (typeof(index) === 'boolean') throw new Error("Nem lehetséges az eltávolítás: nem adott meg indexet!");
    if (typeof(index) !== 'number') throw new Error("Nem lehetséges az eltávolítás: a megadott index nem szám!");
    
    const list = getList();
    if (index < 1 || list.length < index) throw new Error("Nem lehetséges az eltávolítás: túlindexelési probléma adódott!");

}