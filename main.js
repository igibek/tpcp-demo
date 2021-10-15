const rimraf = require('rimraf');
// const yargs = require('yargs')
//         .command('[directory]', 'Directory to delete recursively')
//         .demandCommand(1)
//         .argv

// console.log(process.argv)
rimraf(process.argv[2], { 
    glob: false
}, function(data) {
    console.log(data)
})
