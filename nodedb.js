import postgres from 'postgres'; 

// Criação da conexão
const sql = postgres({
  host: 'localhost',
  port: 5432,
  database: 'nodedb',
  username: 'postgres',
  password: 'T@u4n=2024#',
});

// Exportando sql para uso em outros módulos
export { sql };

// Função para testar a conexão
/*const testConnection = async () => {
  try {
    const result = await sql`SELECT 'Conexão bem-sucedida!' AS message`;
    console.log(result[0].message); // Exibe a mensagem de sucesso
  } catch (error) {
    console.error('Erro ao conectar ao banco de dados:', error);
  } finally {
    await sql.end(); // Fecha a conexão
  }
};

// Testa a conexão
testConnection();*/


