const fs = require('fs');
var colors = require('colors');

const crearTabla = async (base = 5, l = false, h = 10) => {
    try {
        console.log("==================".green);
        console.log(`   Tabla del ${base} `.green);
        console.log("==================".green);
        let data = '';
        let consola = '';
        for (let i = 1; i <= h; i++) {
            data = data + `${i} x ${base} = ${i * base}\n`;
            consola = consola + `${i} ${'x'.blue} ${base} = ${i * base}\n`;
        }
        if (l) console.log(consola);
        fs.writeFileSync(`./output/TABLA-${base}.txt`, data);
        return (`TABLA - ${base}`);
    } catch (e) {
        throw (e);
    }
}

module.exports = {
    crearTabla
}