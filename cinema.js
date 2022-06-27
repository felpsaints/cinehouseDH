var catalogo = require('./database/catalogo.json') //esse require está puxando o catalogo da pasta database, deixando o código mais limpo.


//Adicionar um filme ao catalogo

function adicionarFilme(codigo, nome, duracao, ano, atores, emCartaz){
    return {codigo, nome, duracao, ano, atores, emCartaz};
    };
    catalogo.data.push(adicionarFilme(3, 'Senhor dos Aneis', 3.00, 2001, "Ellija Hood", false));
//console.log('Filme adicionado com sucesso!', catalogo.data);


//Bucar um filme pelo código

function buscarFilme(array,codigo) {
    for (let i = 0; i < array.length; i++){ 
        if (array[i].codigo === codigo) {
            console.log( array[i],'Esse é o filme que vc tanto procura!')
        }
    }
}

//buscarFilme(catalogo.data,3)


//Alterar status do filme

function alterarStatusEmCartaz(array, codigo, status){
    for (let index = 0; index <array.length; index++){ 
        if (array[index].codigo === codigo) {
            array[index].emCartaz = status
        }
    }
}

//alterarStatusEmCartaz(catalogo, 3, true)
//console.log(catalogo.data)