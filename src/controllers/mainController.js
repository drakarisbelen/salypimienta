// Acá nos falta nuestra fuente de datos
const express = require('express');
const platos = require("../database/dishes.js"); 

//console.log("lo platito", platos);
// Acá nos falta un objeto literal con las acciones para cada ruta

//en este caso lo exporto directamente, pero al terminar probar como seria con el objeto por separado

// Acá exportamos el resultado

module.exports = {
    index: (req, res) => {
        res.render('index');
    },
    menu: (req, res) =>{
        //aca lo que le paso en el render es el nombre del archivo ejs en este caso menu.ejs
        //pero dentro del mainRouter defino mi ruta como /detalle solo
        //el render como 2do parametro recibe un Objeto literal para esto envio la constante platos entre {}
        res.render('menu', {platos} );
    },
    about: (req,res) => {
        res.render('about');
    }
};

