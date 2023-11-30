import express  from "express"
import getProduto  from "../controllers/produto/getProduto.js"
import listProduto  from "../controllers/produto/listProduto.js"
import insertProduto  from "../controllers/produto/insertProduto.js"
import updateProduto  from "../controllers/produto/updateProduto.js"
import deleteProduto  from "../controllers/produto/deleteProduto.js"

const router = express.Router()

router.get('/', getProduto)
router.get('/list', listProduto)
router.post('/', insertProduto)
router.put('/', updateProduto)
router.delete('/', deleteProduto)

  
export default router