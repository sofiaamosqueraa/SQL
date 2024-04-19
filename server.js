const express = require('express');
const sqlite3 = require('sqlite3').verbose();

const app = express();
const PORT = 3000;

// Conexão com o banco de dados
const db = new sqlite3.Database('./escola.db', sqlite3.OPEN_READONLY, (err) => {
    if (err) {
        console.error(err.message);
    }
    console.log('Conectado ao banco de dados escola.db.');
});

// Servindo arquivos estáticos da pasta 'public'
app.use(express.static('public'));

// Rota para buscar dados
app.get('/dados', (req, res) => {
    db.serialize(() => {
        db.all("SELECT * FROM Alunos", (err, rows) => {
            if (err) {
                res.status(500).send(err.message);
                return;
            }
            res.json(rows);
        });
    });
});

// Iniciando o servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
