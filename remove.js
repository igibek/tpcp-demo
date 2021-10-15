const rimraf = require('rimraf');

function remove(path) {
    rimraf(path, { 
        glob: false
    }, function(err) {
        if (err) {
            console.error(err);
        } else {
            console.log(`Successfully deleted: ${path}`);
        }
    })
}

if (require.main === module) {
    remove(process.argv[2]);
} else {
    module.exports.remove = remove;
}