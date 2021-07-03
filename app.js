const { crearTabla } = require('./helpers/multiplicar');
const yargs = require('./config/yargs');
console.clear();
crearTabla(yargs.b, yargs.l, yargs.h).then(nombreArchivo => console.log(nombreArchivo, '(CREADA)\n'.green)).catch(err => console.log(err));