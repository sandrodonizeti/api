import produto from '../../models/produtoModel.js'

const getProduto = async (req, res) => {
    try{
        const produtoData = req.body
        const [rows] = await produto.getById(produtoData.id)
        if(rows.length === 0){
            res.status(404).json({
                error: `Usuário id: ${produtoData.id} não Encontrado!`
            })
        } else {
            res.json({
                success: "Usuário Encontrado com Sucesso",
                produto: rows[0] 
            })
        }
    } catch (error){
        console.log(error)
        res.status(500).json({
            error: "Erro no servidor!",
        })
    }
}

export default getProduto