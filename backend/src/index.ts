import express from "express";
import router from "./routes/jokes";
import dotenv from "dotenv"
import cors from "cors"

dotenv.config()

const app = express()
const port = process.env.PORT || 8000

app.use(cors())
app.use(express.json())

app.use('/api', router)

app.use((req, res) => {
    res.status(404).send({msg: 'Not found'})
})

app.listen(port, () => {
    console.log(`Server is Fire at http://localhost:${port}`)
})