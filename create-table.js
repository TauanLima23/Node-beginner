import { sql } from './nodedb.js';

sql`
CREATE TABLE TESTE (
    TITLE TEXT,
    DESCRIPTION TEXT,
    DURATION INTEGER
)
`
.then(() => {
    console.log('Tabela Criada!');
})
.catch(err => {
    console.error('Erro ao criar tabela:', err);
});
