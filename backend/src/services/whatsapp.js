const { default: makeWASocket, useMultiFileAuthState } = require('@whiskeysockets/baileys');

async function startWhatsApp(userId) {
  const { state, saveCreds } = await useMultiFileAuthState(`./auth/${userId}`);
  const sock = makeWASocket({ auth: state });
  
  sock.ev.on('creds.update', saveCreds);
  sock.ev.on('connection.update', ({ connection, lastDisconnect }) => {
    if(connection === 'close') startWhatsApp(userId); // Reconexão automática
  });
  
  return sock;
}

module.exports = { startWhatsApp };