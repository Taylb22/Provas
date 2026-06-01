import express, {response, Router} from "express"
import * as func from "../../controllers/funcionariosController.js"
import * as middle from "../../middleware/funcionariosMiddle.js"

const router = express.Router()
router
    .get("/", func.getAll)
    .get("/:setor",func.getSetor)
    .post("/register", middle.validateJson, func.register)
    .delete("/delete/:id", middle.validateId, func.erase)
    .put("/update/:id", middle.validateId, middle.validateJson , func.update)

export default router