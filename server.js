import express from "express";
import cors from "cors";
import listEndpoints from "express-list-endpoints"
import filesRouter from "./src/services/files/index.js";
import {publicFolderPath} from './src/services/files/index.js'



const server = express();
const PORT = 3001;


//******************** GLOBAL MIDDLEWARE ******************/
server.use(express.static(publicFolderPath))
server.use(cors());
server.use(express.json());

//******************** ENDPOINTS **************************/
server.use("/files", filesRouter)

server.listen(PORT, () => console.log("Server is running on port : ", PORT));


console.table(listEndpoints(server))

server.on("error", (error) =>
  console.log(` Server stopped : ${error}`)
);