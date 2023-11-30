import servico from '../../models/servicoModel.js'

const listServico = async (req, res) => {
    try {

        const [rows] = await servico.getAll(req.userLogged.id)


//fazer esta alteração


        if (rows.length === 0) {
            res.json({
                success: "servico não encontrado!",
                servico: []
            })

//fazer esta alteração


        } else {
            res.json({
                success: "Serviço(s) Encontrado(s) com Sucesso!",
                servico: rows
            })
        }
    } catch (error) {
        console.log(error)
        res.status(500).json({
            error: "Erro no servidor!",
        })
    }
}

export default listServico