import express  from "express"
import getChat  from "../controllers/chat/getChat.js"
import listChat  from "../controllers/chat/listChat.js"
import insertChat  from "../controllers/chat/insertChat.js"
import deleteChat  from "../controllers/chat/deleteChat.js"
import auth from '../middlewares/auth.js'

const router = express.Router()

router.get('/',auth, getChat)
router.get('/list',auth, listChat)
router.post('/', insertChat)
router.delete('/',auth, deleteChat)




  
export default router
