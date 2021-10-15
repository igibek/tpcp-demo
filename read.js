const fs = require('fs')
const yaml = require('js-yaml');

function read(path) {
    const doc = yaml.load(fs.readFileSync(path));
    console.log(doc);
}

if (require.main === module) {
    read(process.argv[2]);
} else {
    module.exports.read = read;
}
