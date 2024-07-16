import express from 'express'
import { rooms } from './local-variable.js'
const allRoomsRouter = express.Router()
allRoomsRouter.get('/',(req,res)=>{
        res.send(rooms)
})
export default allRoomsRouter;