const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333);

/** 
 *  Rota / Recurso
 *
 * 
 *  Métodos HTTP:
 * 
 * GET: Buscar uma informação do back-end
 * POST: Criar uma informação no back-end
 * PUT: Alterar uma informação no back-end
 * DELETE: Deletar uma informação do back-end
 *
 * 
 * Tipos de parâmetros:
 * 
 * Query Params: Parâmetros nomeados enviados na rota após "?" (Filtros, paginação)
 * Route Params: Parâmetros utilizados para identificar recursos
 * Request Body: Corpo da requisição, utilizado para criar ou alterar recursos
 * 
 * 
 * Banco de Dados:
 * SQL: MySQL, SQLite, PostgreSQL, Oracle, Microsoft SQL Server, etc
 * NoSQL: MongoDB, CouchDB, etc
 * 
 * Driver: SELECT * FROM users
 * Query Builder: table('users').select('*').where()
 * 
 * 
 * Entidades:
 *  ONG
 *  Caso(incident)
 * 
 * Funcionalidades:
 *  Login (ONG)
 *  Logout (ONG)
 *  Cadastro (ONG)
 *  Cadastrar novos casos (ONG)
 *  Deletar casos (ONG)
 *  Listar casos específicos (ONG)
 *  Listar todos os casos
 *  Entrar em contato com uma ONG
 **/
