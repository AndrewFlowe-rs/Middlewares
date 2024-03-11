const { loadData } = require("../data")

module.exports =(req,res,next)=> {
const data = loadData();
const user = req.query.user
const admin = data.find(p => p.user === user && p.rol === "Admin" )
if(admin) {
    return next()
}
res.send ('no tiene los privilegios para ingresar')
}