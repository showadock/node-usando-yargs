const fs        = require('fs')

const dividir = async (n1, n2) => {
   try {
        return n1/n2
   } catch (error) {
       console.log(error)
   }
}


const crearArchivo = async (base = 5, listar = false) => {

    let salida = ""
    
    try {
    
        for (let index = 1; index <=10; index++) {
            
            salida += base + " x " + index + " = " + base*index + "\n";
            
           
        }

        if(listar )
        {
            console.log('---------------------')
            console.log('    Tabla del ', base)
            console.log('---------------------')
            console.log(salida) 
        }

        fs.writeFileSync("./calculos/Tabla del "+base+".txt", salida)
        
        return "Tabla del "+base+".txt";

    } catch (error) {
        throw error
    }
}


module.exports = {
    dividir,
    crearArchivo
}