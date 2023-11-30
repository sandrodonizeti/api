import servico from "../../models/servicoModel.js"

const updateServico = async (req, res) => {
    try{
        const servicoData = req.body
        const [result] = await servico.update(servicoData)
        if(result.affectedRows === 1){
            res.json({
                success: "Usuário atualizado com Sucesso!",
                servico: {
                    ...servicoData
                }
            })
        } else {
            res.status(404).json({
                error: `Usuário id: ${servicoData.id} não Encontrado!`
            })
        }
    } catch (error){
        console.log(error)
        res.status(500).json({
            error: "Erro no servidor!",
        })
    }
}

export default updateServico