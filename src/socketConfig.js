// socketConfig.js

const socketIO = require('socket.io');

function configureSocket(server) {
  const io = socketIO(server);

  io.on('connection', (socket) => {
    console.log('Novo cliente conectado');

    socket.on('sendMessage', (data) => {
      // Lógica para processar a nova mensagem recebida do cliente
      // Aqui você pode emitir a mensagem para todos os clientes conectados
      io.emit('newMessage', { chat: data }); // Envia a mensagem de volta para todos os clientes
    });

    socket.on('disconnect', () => {
      console.log('Cliente desconectado');
    });
  });

  return io;
}

module.exports = configureSocket;
