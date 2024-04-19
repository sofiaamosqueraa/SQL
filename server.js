const express = require('express');
const cors = require('cors');
const sqlite3 = require('sqlite3').verbose();

const app = express();
const PORT = 3000;

app.use(cors()); // Permitir solicitações de origens diferentes

const db = new sqlite3.Database('./escola.db', sqlite3.OPEN_READONLY, (err) => {
    if (err) {
        console.error("Erro ao conectar no banco de dados: ", err.message);
        return;
    }
    console.log('Conectado ao banco de dados escola.db.');
});

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.get('/dados', (req, res) => {
    db.serialize(() => {
        db.all("SELECT * FROM Alunos", (err, rows) => {
            if (err) {
                console.error("Erro ao realizar consulta no banco de dados: ", err.message);
                res.status(500).send(err.message);
                return;
            }
            res.json(rows);
        });
    });
});

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
