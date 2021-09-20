import express from 'express'
import { writeFile} from 'fs'
import multer from 'multer'
import {join} from 'path'


const filesRouter = express.Router()
export const publicFolderPath = join(process.cwd(), "/public")
const saveProductImage = (name, contentAsBuffer) => writeFile(join(publicFolderPath, name),contentAsBuffer)

filesRouter.post("/product/:id/upload",multer().single('productImage'),async (req,res,next) => {
    try {
        console.log(req.file)

        await saveProductImage(req.file.originalname, req.file.buffer)
        res.send("Uploaded!")
    } catch (error) {
        next(error)
    }
})


export default filesRouter