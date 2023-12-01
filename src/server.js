import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import userRouter from './routers/userRouter.js';
import chatRouter from './routers/chatRouter.js';
import produtoRouter from './routers/produtoRouter.js';
import servicoRouter from './routers/servicoRouter.js';
import authRouter from './routers/authRouter.js';
import { PORT } from './config.js';

const api = express();

api.use(bodyParser.json());
api.use(cookieParser());

// Configuração das opções CORS
const corsOptions = {
  credentials: true,
  origin: ['http://localhost:3000', 'https://react-vivenciando.onrender.com', 'http://127.0.0.1:3000', 'http://localhost:5173', 'http://127.0.0.1:5173']
};

// Habilitando o CORS com as opções configuradas
api.use(cors(corsOptions));

api.get('/', (req, res) => {
  res.json({ message: "Bem-vindo a nossa API" });
});

api.use('/user', userRouter);
api.use('/auth', authRouter);
api.use('/chat', chatRouter);
api.use('/produto', produtoRouter);
api.use('/servico', servicoRouter);

api.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}! http://localhost:${PORT}`);
});
