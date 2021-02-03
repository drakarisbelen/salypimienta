const express = require('express');
const router = express.Router();

const detailControler = require("../controllers/detailController");

router.get('/:id' , detailControler.detalle);

module.exports = router;
