// Requerir los módulos necesarios
const fs = require("fs"); 
const path = require("path");

const registerLog = (req,res,next) => { 
  fs.appendFileSync(path.join(__dirname , '../logs/usersLogs.txt') , `El usuario ingreso a la ruta ${req.url}\n`); //Crea el mensajee en el archivo
 
 
 
 
  next();
}

module.exports= registerLog