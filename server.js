import dbConnection from "./src/db/dbConnection.js"
import express from "express"
import cors from "cors"
import productsRouter from "./src/routes/productsRoute.js"

// db connection
dbConnection()

// server initialization
const PORT = process.env.PORT
const app = express()


// configuring the middlewares
app.use(express.json())
app.use(cors());

// routing the requests
app.use("/api/v1/products", productsRouter)

// listening the server
app.listen(PORT, (error) => {
    error
        ? console.log(error)
        : console.log(`Server running on localhost:${PORT}`)
})
