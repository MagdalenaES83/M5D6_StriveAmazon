import express from "express";
import cors from "cors";
import listEndpoints from "express-list-endpoints";
import path, { dirname } from "path";
import { fileURLToPath } from "url";
import productRouter from "./src/services/products/index.js";
const server = express();
const PORT = 3001;

server.use(cors());
server.use(express.json());

server.use("/products", productRouter);
console.table(listEndpoints(server));
server.listen(PORT, () => console.log("Server is running on port : ", PORT));

server.on("error", (error) => console.log(` Server stopped : ${error}`));
