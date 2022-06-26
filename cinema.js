var cinema = "Cine: TrueMovie"

console.log(cinema)

const catalogo = [ 
    { 
        titulo: "Harry Potter",
        codigo: 1,
        duracao: 2.5,
        atores: "Emma Watson",
        anoDeLancamento: 2022,
        emCartaz: true
    },

    { 
        titulo: "O Hobbit",
        codigo: 2,
        duracao: 2.0,
        atores: "Martin Freeman",
        anoDeLancamento: 2021,
        emCartaz: false
    }

]

//console.log(catalogo)

// ADICIONAR UM FILME AO CATALOGO//

function adicionarFilme(codigo, nome, duracao, ano, atores, emCartaz){
    return {codigo, nome, duracao, ano, atores, emCartaz};
    };
    catalogo.push(adicionarFilme(3, 'Senhor dos Aneis', 3.00, 2001, "Ellija Hood", false));
//console.log('Filme adicionado com sucesso!', catalogo);


// BUSCAR UM FILME PELO CODIGO
function buscarFilme(array,codigo) {
    for (let i = 0; i < array.length; i++){ 
        if (array[i].codigo === codigo) {
            console.log( array[i],'Esse é o filme que vc tanto procura!')
        }
    }
}
//buscarFilme(catalogo,3)

function alterarStatusEmCartaz(array, codigo, status){
    for (let index = 0; index <array.length; index++){ 
        if (array[index].codigo === codigo) {
            array[index].emCartaz = status
        }
    }
}

/*alterarStatusEmCartaz(catalogo, 3, true)
console.log(catalogo)