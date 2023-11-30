import chat from '../../models/chatModel.js';

const getChat = async (req, res) => {
    try {
        const chatData = req.body;
        const [rows] = await chat.getById(chatData.id);
        if (rows.length === 0) {
            res.status(404).json({
                error: `Mensagem id: ${chatData.id} não encontrada!`
            });
        } else {
            res.json({
                success: "Mensagem encontrada com sucesso",
                chat: rows[0]
            });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({
            error: "Erro no servidor!",
        });
    }
}

export default getChat;