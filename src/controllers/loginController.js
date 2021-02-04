// Acá nos falta nuestra fuente de datos
const express = require('express');
const platos = require("../database/users.js"); 

// Acá exportamos el resultado
module.exports = {
    login: (req, res) => {
        //let user = {
        //    first_name : "pepito",
         //   email : "reypepito@pepi.com"
        //};
        //req.session = user;
        //console.log("session 2", req.session)
        res.render('login');
    },
    //auth: (req, res)  =>{ },
    register: (req, res) =>{
        //aca lo que le paso en el render es el nombre del archivo ejs en este caso menu.ejs
        //pero dentro del mainRouter defino mi ruta como /detalle solo
        //el render como 2do parametro recibe un Objeto literal para esto envio la constante platos entre {}
        res.render('register');
    },
    processRegister: (req, res) =>{
        console.log("pase por processRegister", req.body);
        return res.send("OK LLEGASTE POR POST");        
    }
};


