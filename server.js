import dbConnection from "./src/db/dbConnection.js";
import express from "express";
import cors from "cors";
import productsRouter from "./src/routes/productsRoute.js";
// server initialization

const PORT = process.env.PORT;
const app = express();

// configuring the middlewares
app.use(express.json());
app.use(cors());

// db connection
dbConnection()
  .then(() => {
    console.log(`DB connected successfully to the server.`);
    app.listen(PORT, () => {
      console.log(`Server running on localhost:${PORT}`);
    });
  })
  .catch((err) =>
    console.log(`There was an error connecting db to the server: ${err}`)
  );

// routing the requests
app.use("/api/v1/products", productsRouter);
// listening the server
