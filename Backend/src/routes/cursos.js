import express from 'express'
import AlumnoController from '../controllers/alumnoController.js';

const { findAll, create, update, remove, findOne } = AlumnoController

const router = express.Router()

router.get("/", findAll)
router.post("/", create)
router.put("/", update)
router.delete("/:id", remove)
router.get("/:id", findOne)

export default router;