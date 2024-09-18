const database = 'BD3-KAIQUE-AULA';

/* NOME DO BANCO DE DADOS */
const collection = 'livraria';

/*CRIAR OU ACESSAR O BANCO DE DADOS*/
use(database);

/*SELECIONA TODOS REGISTROS NA COLEÇÃO DE DADOS: */
db[collection].find(
    
    {"categoria": "Fantasia Heroica"},
    {"_id": 0, "codigo":0}


);