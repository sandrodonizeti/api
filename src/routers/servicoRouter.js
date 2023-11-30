import express  from "express"
import getServico  from "../controllers/servico/getServico.js"
import listServico  from "../controllers/servico/listServico.js"
import insertServico  from "../controllers/servico/insertServico.js"
import updateServico  from "../controllers/servico/updateServico.js"
import deleteServico  from "../controllers/servico/deleteServico.js"
import auth from '../middlewares/auth.js'

const router = express.Router()

router.get('/', getServico)
router.get('/list',auth, listServico)
router.post('/', insertServico)
router.put('/',auth, updateServico)
router.delete('/',auth, deleteServico)

  
export default router