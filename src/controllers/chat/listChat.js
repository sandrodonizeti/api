import chat from '../../models/chatModel.js';

const listChat = async (req, res) => {
    try {
        const [rows] = await chat.getAll(req.userLogged.id);
        if (rows.length === 0) {
            res.json({
                success: "Mensagens não encontradas!",
                chat: []
            });
        } else {
            res.json({
                success: "Mensagens encontradas com sucesso",
                chat: rows
            });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({
            error: "Erro no servidor!",
        });
    }
}

export default listChat;