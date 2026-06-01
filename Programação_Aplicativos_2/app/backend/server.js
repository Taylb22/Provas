import express from "express"
import cors from "cors"
import initRoutes from "./src/routes/routes.js"

const app = express()
const port = 8080

app.use(cors({
    origin : "*"
}))

initRoutes(app)
app.get("/", (req, res) => {
    res.send("Server Running...")
})

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`)
})