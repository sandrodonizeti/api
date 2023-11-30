import chat from '../../models/chatModel.js';

const insertChat = async (req, res) => {
    try {
        const chatData = req.body;
        const [result] = await chat.create(chatData);
        if (result.affectedRows === 1) {
            res.json({
                success: "Mensagem inserida com sucesso!",
                chat: {
                    id: result.insertId,
                    ...chatData
                }
            });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({
            error: "Erro no servidor!",
        });
    }
}

export default insertChat;