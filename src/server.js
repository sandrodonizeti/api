import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import http from 'http'; // Importe o módulo HTTP
import { Server } from 'socket.io'; // Importe o módulo Server do Socket.io
import userRouter from './routers/userRouter.js';
import chatRouter from './routers/chatRouter.js';
import produtoRouter from './routers/produtoRouter.js';
import servicoRouter from './routers/servicoRouter.js';
import authRouter from './routers/authRouter.js';
import { PORT } from './config.js';

const api = express();
const server = http.createServer(api); // Crie o servidor HTTP a partir do Express  
const io = new Server(server); // Crie o servidor Socket.io a partir do servidor HTTP

var corsOptions = {
    credentials: true,
    origin: ['http://localhost:3000', 'https://react-vivenciando.onrender', 'http://127.0.0.1:3000', 'http://localhost:5173', 'http://127.0.0.1:5173']
    }

//converte toda requisição com body json para objeto no req.body
api.use(cors(corsOptions))
api.use(bodyParser.json())
api.use(cookieParser())


api.get('/', (req, res) => {
    res.json({message: "Bem-vindo a nossa API"})
})

api.use('/user', userRouter)
api.use('/auth', authRouter)
api.use('/chat', chatRouter)
api.use('/produto', produtoRouter)
api.use('/servico', servicoRouter)

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
  

api.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}! http://localhost:${PORT}`)
})