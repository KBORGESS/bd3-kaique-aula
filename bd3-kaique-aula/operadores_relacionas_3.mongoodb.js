// NOME DO BANCO DE DADOS
const database = 'BD3-KAIQUE-AULA';

// NOME DA COLEÇÃO DE DADOS
const collection = 'livraria';

// CRIAR OU ACESSAR O BANCO DE DADOS
use(database);

// SELECIONA OS LIVROS DE UMA CATEGORIA E UM VALOR DETERMINADO
db[collection].find({
    $and:
        [{ categoria: { $eq: 'Fantasia Heroica'} },
        { valor: { $lte: 120 }}]
}

);


