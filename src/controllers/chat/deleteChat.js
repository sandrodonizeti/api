import chat from '../../models/chatModel.js'
const deleteChat = async(req, res) => {
    try{
        const userData = req.body
        const [result] = await chat.remove(userData.id)
        if(result.affectedRows === 1){
            res.json({
                success: "Mensagem Apagada com Sucesso!",
            })
        }else{
            res.status(404).json({
                error: `Mensagem id: ${userData.id} não Encontrada!`
            })
        }
    } catch (error){
        console.log(error)
        res.status(500).json({
            error: "Erro no servidor!",
        })
    }
}

export default deleteChat
