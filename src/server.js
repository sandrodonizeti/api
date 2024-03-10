// Importando os módulos necessários
import express from 'express';
import http from 'http';
import { Server } from 'socket.io';
import bodyParser from 'body-parser';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import userRouter from './routers/userRouter.js';
import chatRouter from './routers/chatRouter.js';
import produtoRouter from './routers/produtoRouter.js';
import servicoRouter from './routers/servicoRouter.js';
import authRouter from './routers/authRouter.js';
import { PORT } from './config.js';

// Criando a instância do Express
const api = express();
const server = http.createServer(api); // Criando o servidor HTTP a partir do Express
const io = new Server(server); // Criando o servidor Socket.io a partir do servidor HTTP

// Configurando as opções CORS
const corsOptions = {
  credentials: true,
  origin: [
    'http://localhost:3000',
    'https://react-vivenciando.onrender',
    'http://127.0.0.1:3000',
    'http://localhost:5173',
    'http://127.0.0.1:5173',
  ],
};

// Habilitando o CORS com as opções configuradas
api.use(cors(corsOptions));

// Configurando middlewares
api.use(bodyParser.json());
api.use(cookieParser());

// Rotas
api.get('/', (req, res) => {
  res.json({ message: 'Bem-vindo a nossa API' });
});

api.use('/user', userRouter);
api.use('/auth', authRouter);
api.use('/chat', chatRouter);
api.use('/produto', produtoRouter);
api.use('/servico', servicoRouter);

// Eventos do Socket.io
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

// Iniciando o servidor
server.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}! http://localhost:${PORT}`);
});

