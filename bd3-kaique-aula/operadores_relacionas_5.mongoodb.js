const database = 'BD3-KAIQUE-AULA';

/* NOME DO BANCO DE DADOS */
const collection = 'livraria';

/*CRIAR OU ACESSAR O BANCO DE DADOS*/
use(database);


// LISTA TODOS OS LIVROS DO TOLKIEN EM ORDEM DECRESCENTE DE VALOR
db[collection].find({
    autor: "J.R.R Tolkien"
}).sort({ valor: -1 });
