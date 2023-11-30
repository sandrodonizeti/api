import user from '../../models/userModel.js'

const listUsers = async (req, res) => {
    try {
        const [rows] = await user.getAll(req.userLogged.id)


//fazer esta alteração


        if (rows.length === 0) {
            res.json({
                success: "usuario não encontrado!",
                users: []
            })

//fazer esta alteração


        } else {
            res.json({
                success: "Usuário(s) Encontrado(s) com Sucesso!",
                users: rows
            })
        }
    } catch (error) {
        console.log(error)
        res.status(500).json({
            error: "Erro no servidor!",
        })
    }
}

export default listUsers