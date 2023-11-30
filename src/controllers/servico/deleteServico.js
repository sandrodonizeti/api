import servico from "../../models/servicoModel.js"

const deleteServico = async(req, res) => {
    try{
        const servicoData = req.body
        const [result] = await servico.remove(servicoData.id)
        if(result.affectedRows === 1){
            res.json({
                success: "Servico Apagado com Sucesso!",
            })
        }else{
            res.status(404).json({
                error: `Servico id: ${servicoData.id} não Encontrado!`
            })
        }
    } catch (error){
        console.log(error)
        res.status(500).json({
            error: "Erro no servidor!",
        })
    }
}

export default deleteServico