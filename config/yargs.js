const argv  =   require('yargs')
.option('b', 
{
    alias: 'base',
    type: 'number',
    demandOption: true,
    description: "Base a multiplicar"
})
.option('l',
{
    alias: 'listar',
    type: 'boolean',
    default: false,
    description: "Listar valores"
})
.check((argv, options) => {
    if(isNaN(argv.b)) {
        throw "La base debe ser un número"
    }

    return true 
}).argv



module.exports = {
    argv
}