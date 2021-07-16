const fs = require('fs');

//Async
const creararchivo = async(base,hastadonde) => {
    try {
        return new Promise((resolve,reject) => {
            console.log("===========");
            console.log("Tabla del ",base)
            console.log("===========");
            
            salida = '';
    
            for(let i=1;i <=hastadonde;i++){
                salida += `${base} x ${i} = ${base * i}\n`;
            }
    
            console.log(salida);
    
            fs.writeFileSync(`./salida/tabla del ${base} .txt`,salida)
                
            resolve(`Archivo tabla del ${base} hasta el ${hastadonde}`);
        })
    } catch (err) {
        throw err
    }
    
}

//Promesa normal
/*const creararchivo = (base) => {
    return new Promise((resolve,reject) => {
        console.log("===========");
        console.log("Tabla del ",base)
        console.log("===========");
        
        salida = '';

        for(let i=1;i <=10;i++){
            salida += `${base} x ${i} = ${base * i}\n`;
        }

        console.log(salida);

        fs.writeFileSync(`tabla del ${base} .txt`,salida)
            
        resolve(`Archivo tabla del ${base}`);
    })
}*/
    



/*const creararchivo = (base) => {
    
    console.log("===========");
    console.log("Tabla del ",base)
    console.log("===========");
    
    salida = '';

    for(let i=1;i <=10;i++){
        salida += `${base} x ${i} = ${base * i}\n`;
    }

    console.log(salida);

    fs.writeFileSync(`tabla del ${base} .txt`,salida,(err) => {
        if(err) throw err
        console.log(`Archivo tabla del ${base} creado`);
    })
}*/


module.exports = {
    creararchivo
}


