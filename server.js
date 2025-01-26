import dbConnection from "./db/dbConnection"
import express from "express"
import cors from cors
import productsRouter from "./routes/productsRoute"
// server initialization
const PORT = process.env.PORT
const app = express()
// configuring the middlewares
app.use(express.json())
app.use(cors());
// db connection
dbConnection()
// routing the requests
app.use("/api/v1/products", productsRouter)
// listening the server
app.listen(PORT, () => {
    res.send(`Server running on localhost:${PORT}`)
})
