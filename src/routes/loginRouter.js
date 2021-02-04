const express = require('express');
const router = express.Router();

const loginController = require("../controllers/loginController");
//requerir el user validator


//router.get('/:id' , detailControler.detalle);

//Login 
router.get("/login", loginController.login);

//Registro
//Esta solo me muestra la vista register ya que va con get
router.get("/register", loginController.register);

//esta vista recibe lo que envio por POST al "confirmar" registrar
//Proceso registro
router.post("/register", loginController.processRegister);

//perfil del usuario
//router.get('/profile/:userID', loginController.profile)

module.exports = router;
