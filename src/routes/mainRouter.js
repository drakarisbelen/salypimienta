// Acá nos falta express y el router
const express = require("express");
const router = express.Router();

// Aća nos falta traer el controller
const controller = require('../controllers/mainController');
const loginController = require('../controllers/loginController');
const { register } = require("../controllers/loginController");

// Acá definimos las rutas
router.get("/", controller.index);

router.get("/menu", controller.menu);

router.get("/about", controller.about);

//Rutas del login
router.get("/login", loginController.login);
router.get("/register", loginController.register);



router.get("/pruebaSession", function(req,res){
    if (req.session.numeroVisitas == undefined)
    {
        req.session.numeroVisitas = 0
    }
    req.session.numeroVisitas ++;

    res.send("Session tiene el numero:" + req.session.numeroVisitas)
});

// Acá exportamos el resultado
module.exports = router;