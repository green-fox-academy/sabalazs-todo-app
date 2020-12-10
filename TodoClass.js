'use strict';

import { printMessage } from "./printMessage.js";

export class Todo {
    id;
    description;
    urgent;

    constructor(id, description, urgent = false) {
        this.id = id;
        this.description = description;
        this.urgent = urgent;
    }

    print() {
        printMessage(`${this.id}. - ${this.description}`);
    }
}