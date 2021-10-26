// importar express e mysql
const express= require('express');
const mysql = require('mysql2');
const app = express();

//criar conexão com o banco. Para saber qual o ip, digite no terminal docker inspect mysql-container e procure por IPAddress. Geralmente o docker utiliza o mesmo IP para os container, porém é possível criar container em redes diferentes
const connection = mysql.createConnection({
    //host: '172.17.0.2',
    host: 'mysql-container',
    user: 'root',
    password: 'root',
    database: 'learning_docker',
    insecureAuth: false
});

connection.connect();

// criar rota GET para recuperar os produtos do banco de dados. Se ocorrer erro o processo é abortado
app.get('/products', function(req, res) {
    connection.query('SELECT * FROM products', function (error, result) {
        if (error) {
            throw error;
        }

        res.send(result.map(item => ({ name: item.name, price: item.price })));
    })
})

// rodar a aplicação na porta 9001
app.listen(9001, '0.0.0.0', function () {
    console.log('Listening on port 9001');
})
