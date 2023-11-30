import servico from '../../models/servicoModel.js'

const getServico = async (req, res) => {
    try{
        const servicoData = req.body
        const [rows] = await servico.getById(servicoData.id)
        if(rows.length === 0){
            res.status(404).json({
                error: `Servico id: ${servicoData.id} não Encontrado!`
            })
        } else {
            res.json({
                success: "Usuário Encontrado com Sucesso",
                servico: rows[0] 
            })
        }
    } catch (error){
        console.log(error)
        res.status(500).json({
            error: "Erro no servidor!",
        })
    }
}

export default getServico