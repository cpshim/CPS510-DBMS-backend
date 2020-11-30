const { json } = require('body-parser');
const express = require('express');

const simpleQueries = require('./routes/simpleQueries');
const advancedQueries = require('./routes/advancedQueries');
const distinctQueries = require('./routes/distinctQueries');
const minusQueries = require('./routes/minusQueries');
const createTables = require('./routes/createTables');
const dropTables = require('./routes/dropTables');
const insertTables = require('./routes/insertTable');

const app = express();

const port = 5000;

const oracledb = require('oracledb');
try {
    oracledb.initOracleClient({ libDir: process.env.LIB_PATH });
} catch (err) {
    console.error('Whoops!');
    console.error(err);
    process.exit(1);
}

app.use('/simplequeries', simpleQueries);
app.use('/advancedqueries', advancedQueries);
app.use('/distinctqueries', distinctQueries);
app.use('/minusqueries', minusQueries);
app.use('/createtables', createTables);
app.use('/droptables', dropTables);
app.use('/inserttables', insertTables);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});
