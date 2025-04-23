import express from 'express'
import { run, test } from '../controllers/user.controller.js';


const router = express.Router();

router.get("/", (req, res) => {
    res.json({message: "You are at the root of the API"})
})
router.get("/test", test);

router.get("/run", run)


export default router;