import express from 'express'
import DocenteController from '../controllers/docenteController.js';

const { findAll, create, update, remove, findOne } = DocenteController

const router = express.Router()

router.get("/", findAll)
router.post("/", create)
router.put("/", update)
router.delete("/:id", remove)
router.get("/:id", findOne)

export default router;