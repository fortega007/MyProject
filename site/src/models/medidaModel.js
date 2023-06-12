var database = require("../database/config");

function buscarRespostas(idQuiz) {
    instrucaoSql = ''

    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql = `select top ${limite_linhas}
        resposta, 

                    from quiz
                   `;
    }



    else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        if (idQuiz == 1) {
            instrucaoSql = `select 
    resposta, count(resposta) as numero                 
                    from quiz
                    group by resposta`;
        }



    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}




module.exports = {
    buscarRespostas,

}
