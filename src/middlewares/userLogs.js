// Requerir los módulos necesarios
const fs = require("fs");
const path = require("path");

const registerLog = (req,res,next) => { 
  
  const url = req.url;  //Obtiene la ruta 
    const textLog = `El usuario ingreso a la ruta ${url}` //Crea el mensaje con la ruta correspondiente
  fs.appendFileSync(path.join(__dirname, "../logs/userLogs.txt" , textLog)); //Crea el mensajee en el archivo
  next();
}

module.exports= registerLog