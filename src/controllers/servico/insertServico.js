
import servico from '../../models/servicoModel.js'
const insertServico = async(req, res) => {
try{
    const servicoData = req.body
    const [result] = await servico.create(servicoData)
    if(result.affectedRows === 1){
        res.json({
            success: "Serviço inserido com Sucesso!",
            servico: {
                id: result.insertId,
                ...servicoData
                
            }
        })
    }
}
catch (error){
    console.log(error)
    res.status(500).json({
        error: "Erro no servidor!",
    })
}
}

export default insertServico