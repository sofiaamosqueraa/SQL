INSERT INTO Alunos ( Nome, Idade, Classe, Nota) VALUES
('Lara Pires', 16, 10, 85.5),
('Lara Lorenzo', 17, 10, 92.3),
('Tomás', 15, 10, 78.9),
('Gonçalo', 16, 10, 87.2),
('Caroll', 17, 10, 65.4),
( 'Abdaisy', 18, 10, 65.4),
('Miguel', 16, 10, 65.4),
('Jean', 20, 10, 65.4),
('Sofia', 18, 10, 65.4),
( 'Vishwa', 18, 10, 65.4),
( 'Eudney', 17, 10, 65.4),
( 'Guilherme', 16, 10, 65.4),
( 'Leonardo', 17, 10, 65.4),
('Maelson', 16, 10, 65.4);

-- Selecionar todos os alunos
SELECT * FROM Alunos;

-- Selecionar o nome e a idade de todos os alunos com idade superior a 15 anos
SELECT Nome, Idade FROM Alunos WHERE Idade > 15;

-- Selecionar o nome, a classe e a nota de todos os alunos que estão na classe 10
SELECT Nome, Classe, Nota FROM Alunos WHERE Classe = 10;

-- Calcular a média das notas de todos os alunos
SELECT AVG(Nota) AS MediaNotas FROM Alunos;

-- Selecionar o nome e a nota do aluno com a nota mais alta
SELECT Nome, Nota FROM Alunos WHERE Nota = (SELECT MAX(Nota) FROM Alunos);
