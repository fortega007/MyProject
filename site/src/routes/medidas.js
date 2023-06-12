var express = require("express");
var router = express.Router();

var medidaController = require("../controllers/medidaController");

router.get("/ultimas/:idQuiz", function (req, res) {
    medidaController.buscarRespostas(req, res);
});


module.exports = router;