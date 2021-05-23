
const { boolean } = require('yargs');
const { dividir, crearArchivo } = require('./helpers/functions');
const { argv } = require('./config/yargs');
const colors = require('colors');

crearArchivo(argv.b,  argv.l)
.then(archivo => {
    console.log(archivo+" creado".rainbow);
})
.catch(err => console.log(err))

