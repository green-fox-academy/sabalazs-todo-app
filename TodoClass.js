'use strict';

import { printMessage } from "./printMessage.js";

export class Todo {
    id;
    description;
    completed;

    constructor(id, description, completed = false) {
        this.id = id;
        this.description = description;
        this.completed = completed;
    }

    print() {
        printMessage(`${this.id}. - ${this.description}`);
    }
}