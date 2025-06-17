// server.js
require('dotenv').config(); // Carrega as variáveis de ambiente
const express = require('express');
const cors = require('cors');
const { Pool } = require('pg');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

const pool = new Pool({
  connectionString: process.env.DATABASE_URL, // Usa a variável de ambiente
});

// Verifica se a conexão com o banco de dados está funcionando
app.get('/api', (req, res) => {
  res.json({ message: 'API FastBite está funcionando! Use /api/products para ver produtos.' });
});

// Rota para pegar produtos e categorias
app.get('/api/products', async (req, res) => {
  try {
    const categoriasResult = await pool.query('SELECT categoria_id, nome FROM categorias ORDER BY nome;');
    const produtosResult = await pool.query(
      `SELECT produto_id, categoria_id, nome, descricao, preco, url_imagem, disponivel
       FROM produtos WHERE disponivel = TRUE ORDER BY nome;`
    );

    const categorias = categoriasResult.rows;
    const produtos = produtosResult.rows;

    const data = categorias.map(cat => ({
      categoria_id: cat.categoria_id,
      nome: cat.nome,
      produtos: produtos.filter(p => p.categoria_id === cat.categoria_id),
    }));

    res.json(data);
  } catch (error) {
    console.error('Erro ao buscar produtos:', error);
    res.status(500).json({ error: 'Erro ao buscar produtos.' });
  }
});

// Inicia o servidor
app.listen(PORT, () => {
  console.log(`API rodando na porta ${PORT}`);
});