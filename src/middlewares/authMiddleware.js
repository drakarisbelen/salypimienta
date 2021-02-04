module.exports= (req,res,next) =>{
    console.log("Datos de sesion", req.session);
    console.log("Datos de Cookies", req.cookies);
    
    next(); //siempre va next sino queda en el infinito
}