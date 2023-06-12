var medidaModel = require("../models/medidaModel");

function buscarRespostas(req, res) {

    const limite_linhas = 7;

    var idQuiz = req.params.idQuiz;

    console.log(`Recuperando as ultimas ${limite_linhas} respostas`);

    medidaModel.buscarRespostas(idQuiz, limite_linhas).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}


function buscarRespostas(req, res) {

    var idQuiz = req.params.idQuiz;

    console.log(`Recuperando medidas em tempo real`);

    medidaModel.buscarRespostas(idQuiz).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

module.exports = {
    buscarRespostas,
}


