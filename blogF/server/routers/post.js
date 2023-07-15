import express  from "express";
import { getposts ,createpost,updatepost} from "../controllers/postcontroller.js";
const router = express.Router()


router.get('/',getposts)
router.post('/',createpost)
router.post('/update',updatepost)



export default router;