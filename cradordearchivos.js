//const { argv, option } = require('yargs');
const { boolean } = require('yargs');
const { creararchivo } = require('./helpers/lapartedelcodigoquesuma');

const argv = require('./yargs/yargs');
//const base = 3;

console.clear();

//console.log(argv);
//console.log('base: yargs',argv.b);
if(argv.l){
    creararchivo(argv.b,argv.h)
    .then(crear => console.log(crear,'creado'))
    .catch(err => console.log(err));
}


