import express from 'express'
import {rooms} from './local-variable.js'
const roomRouter = express.Router()

roomRouter.post('/',(req,res)=>{
    const data=req.body
    rooms.push({id:Math.floor(1 + Math.random() * 99), ...data,status:'available'})
    res.send({message:'Room created successfully'})
})
export default roomRouter;
