const yargs = require('yargs')
    .option('b', {
        alias: 'base',
        type: 'number',
        describe: 'Base de la tabla de multiplicar',
        demandOption: true
    }).option('l', {
        alias: 'listar',
        type: 'boolean',
        describe: 'Condición para mostrar la tabla en consola'
    }).option('h', {
        alias: 'hasta',
        type: 'number',
        describe: 'Es el número hasta donde se quiere que llegue la tabla'
    }).check((yargs, options) => {
        if (isNaN(yargs.b)) {
            throw ('La base debe ser un numero');
        }
        return true;
    })
    .argv;
module.exports = yargs