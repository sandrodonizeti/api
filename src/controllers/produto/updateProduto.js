import produto from '../../models/produtoModel.js'

const updateProduto = async(req, res) => {
try{
    const produtoData = req.body
    const [result] = await produto.update(produtoData)
    if(result.affectedRows === 1){
        res.json({
            success: "Produto inserido com Sucesso!",
            produto: {
                ...produtoData
                
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

export default updateProduto