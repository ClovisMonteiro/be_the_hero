const express = require('express');
const cors = require('cors');
const routes = require('./routes');
const app = express();


app.use(cors());

app.use(express.json());
app.use(routes);

/**
 * Rota / Recursos
 */

/**
 * Métodos HTTP:
 * 
 * GET: Buscar uma informação do back-end
 * POST: Criar uma informação no back-end
 * PUT: alterar uma informação no Back-end
 * DELETE: deletar uma informação no back-end
 */

 /**
  * Tipos de parametro:
  * 
  * Query Params: Parametros nomeados enviados na rota após "?" serpe para:
  * Filtros, Paginação
  *  
  * Route Params: Parametros utilizados para identificar recursos
  * Request Body: Corpo da requisição, utilizado para criar ou alterar recursos
  */

  /**
   * SQL: MySQL, SQLite, PostegreSQL, Oracle, Microsoft SQL Server
   * NoSQL: MongoDB, CouchDB, etc 
   */

   /**
    * Usando o SQLite;
    * Driver: SELECT * FROM users
    * Query Builder: table('users').select('*').where()
    * 
    *     */

app.listen(3333);