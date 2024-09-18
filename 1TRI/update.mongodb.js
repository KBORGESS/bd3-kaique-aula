const database = 'BD3-KAIQUE-AULA';

/* NOME DO BANCO DE DADOS */
const collection = 'livraria';

/*CRIAR OU ACESSAR O BANCO DE DADOS*/
use(database);

/* ALTERA OS DADOS DE UM ÚNICO DOCUMENTO DA COLLECTION */
db[collection].updateOne(
    {titulo: "As Cavernas de Aço"},

    {$set: {valor: "250"}}

);


