const fs = require('fs') //requiere fs


const userLogs = (req, res, next) => {  //se defien una funcion llamada userLogs que resibe tres parametros
    const { url } = req;  //Obtiene la url que solicita el usuario
    const logText = `El usuario ingresó a la ruta: ${url}\n`; //Crea una cadena de texto que se registrara en el archivo

    fs.appendFileSync('logs/userLogs.txt', logText, (err) => { //Esta linea se usa  para agregar la cadena de texto al archivo userLogs.txt 
        if (err) throw err;//
    });

    next();// Si no hai errores al escribir en el archivo , se llama a la funcion next . Esto permite que la solicitud continue al siguiente middleware o controlador
};

module.exports = userLogs//Exporta la funcion para poder usarlo en otros archivos