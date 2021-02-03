const dishes = require('../database/dishes');

module.exports = {
    detalle: (req, res) => {
        let id = dishes.find(plato => {
            return plato.id == req.params.id;
        });
        res.render('detalle', { id });
    }
};