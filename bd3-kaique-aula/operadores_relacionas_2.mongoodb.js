const database = 'BD3-KAIQUE-AULA';

/* NOME DO BANCO DE DADOS */
const collection = 'livraria';

/*CRIAR OU ACESSAR O BANCO DE DADOS*/
use(database);

// SELECIONA OS LIVROS COM VALORES ENTRE 100 E 150
db[collection].find(
    {valor:{$gte: 100,$lte: 150 }}
);
