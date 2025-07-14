const express = require('express');
const app = express();
const PORT = 3000;

// Página HTML simples
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
        <p>Página inicial do seu projeto CRM integrado ao WhatsApp.</p>
      </body>
    </html>
  `);
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
