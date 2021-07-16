const argv = require('yargs')
    .option('b',{
        alias:'base',
        type:'number',
        demandOption: true,
        description: 'numero de la tabla a multiplicar'
    })
    .option('l',{
        alias: 'listar',
        type: Boolean,
        default: false,
        description: 'Opciones true o false pa q jale o no'
    })
    .option('h',{
        alias:'hasta',
        type:'number',
        //demandOption: true,
        description:'numero hasta el q llega',
        default:10
    })
    .check( argv => {
        if(isNaN(argv.b)){
            throw 'La base debe ser un numero'
        }
        return true;
    })
    .check(argv => {
        if(argv.l){
            return true;
        }else{
            throw 'Listar esta en false'
        }
    })
    .argv;

module.exports = argv;

