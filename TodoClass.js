'use strict';

export class Todo {
    id;
    description;
    completed;

    constructor(id, description, completed = false) {
        this.id = id;
        this.description = description;
        this.completed = completed;
    }
}