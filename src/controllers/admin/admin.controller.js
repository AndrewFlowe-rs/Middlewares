module.exports = (req,res)=> {
    const users = req.query.user ;
    res.send (`Hola admin ${users}`)
}