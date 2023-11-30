import produto from "../../models/produtoModel.js"
const deleteProduto = async(req, res) => {
    try{
        const ProdutoData = req.body
        const [result] = await Produto.remove(ProdutoData.id)
        if(result.affectedRows === 1){
            res.json({
                success: "Produto Apagado com Sucesso!",
            })
        }else{
            res.status(404).json({
                error: `Produto id: ${ProdutoData.id} não Encontrado!`
            })
        }
    } catch (error){
        console.log(error)
        res.status(500).json({
            error: "Erro no servidor!",
        })
    }
}

export default deleteProduto