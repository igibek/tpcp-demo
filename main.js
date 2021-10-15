const rm = require('./remove');
const rd = require('./read');

let arguments = process.argv.slice(2);

if (arguments < 2) {
    printUsage();
    process.exit(1);
}

let command = arguments[0];

if (command === '--remove') {
    rm.remove(arguments[1]);
} else if (command === '--read') {
    rd.read(arguments[1]);
} else {
    printUsage();
}

function printUsage() {
    console.log(`Usage: node main.js (--read|--remove) [path]`);
}

