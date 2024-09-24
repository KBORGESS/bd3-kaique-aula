const database = 'BD3-KAIQUE-AULA';

/* NOME DO BANCO DE DADOS */
const collection = 'livraria';

/*CRIAR OU ACESSAR O BANCO DE DADOS*/
use(database);

// SELECIONA OS LIVROS DE UMA CATEGORIA E UM VALOR DETERMINADO
db[collection].find({
    $or:
        [{ categoria: { $eq: 'Fantasia Heroica'} },
        { valor: { $lte: 120 }}]
}

);