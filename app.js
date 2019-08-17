const { crearArchivo } = require('./tablas/multiplicar/multiplicar');

let colors = require('colors');
 
console.log('hello'.green); // outputs green text
console.log('i like cake and pies'.underline.red) // outputs red underlined text
console.log('inverse the color'.inverse); // inverses the color
console.log('OMG Rainbows!'.rainbow); // rainbow
console.log('Run the trap'.trap); // Drops the bass


//let argv2 = process.argv
console.log(argv);

//console.log(argv2);
let base = 2;
crearArchivo(base)
    .then(archivo => console.log('archivo-creado'))
    .catch(e => console.log(e));
