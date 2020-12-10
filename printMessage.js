'use strict';

//prints the argument to the console with cyan

export function printMessage(message) {
    console.log('\x1b[36m', message);
}
