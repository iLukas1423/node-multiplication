const yargs = require('yargs')
    .option('b', {
        alias: 'base',
        type: 'number',
        demandOption: true
    }).option('l', {
        alias: 'listar',
        type: 'boolean',
    }).option('h', {
        alias: 'hasta',
        type: 'number',
    }).check((yargs, options) => {
        if (isNaN(yargs.b)) {
            throw ('La base debe ser un numero');
        }
        return true;
    })
    .argv;
module.exports = yargs