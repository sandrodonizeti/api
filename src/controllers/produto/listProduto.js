import produto from '../../models/produtoModel.js'
const listProduto = async (req, res) => {
    try{
        const [rows] = await produto.getAll()
        if(rows.length === 0){
            res.status(404).json({
                error: `Produto não Encontrado!`
            })
        } else {
            res.json({
                success: "Produto Encontrado com Sucesso",
                produto: rows
            })
        }
    } catch (error){
        console.log(error)
        res.status(500).json({
            error: "Erro no servidor!",
        })
    }
}

export default listProduto