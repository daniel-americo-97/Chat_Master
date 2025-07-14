require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const PORT = process.env.PORT || 3000;

// String de conexão do MongoDB Atlas
const mongoUri = process.env.MONGO_URI || "mongodb+srv://danielamericon:SQV.JvU5$w4iXFN@cluster0.bog1muo.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// Conectando ao MongoDB Atlas
mongoose.connect(mongoUri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log("Conectado ao MongoDB Atlas!");
})
.catch((err) => {
  console.error("Erro ao conectar ao MongoDB:", err.message);
});

// Página inicial simples
app.get('/', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="pt-br">
      <head>
        <meta charset="UTF-8">
        <title>Chat_Master</title>
        <style>
          body { font-family: Arial, sans-serif; background: #f9f9f9; text-align: center; margin-top: 50px; }
          h1 { color: #222; }
          p { color: #555; }
        </style>
      </head>
      <body>
        <h1>Bem-vindo ao Chat_Master!</h1>
        <p>Conexão com MongoDB Atlas: <b>${mongoose.connection.readyState === 1 ? 'Conectado' : 'Desconectado'}</b></p>
      </body>
    </html>
  `);
});

// Inicia o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
