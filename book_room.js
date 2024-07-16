import express from 'express'
import{ booking, customers, rooms } from './local-variable.js'
const roomBookRouter = express.Router()


roomBookRouter.post('/',(req,res)=>{
    const data = req.body
    const roomIdx  = rooms.findIndex((room)=>room.id==data.roomId)
    console.log(roomIdx)
    if((rooms[roomIdx].status =='available') || ( data.date != rooms[roomIdx].date)){
      console.log(rooms[roomIdx])
            rooms[roomIdx] ={...data,...rooms[roomIdx],status:'booked',booking_id:Math.floor(1 + Math.random() * 99)}
            customers.push({...data,room_name:rooms[roomIdx].name})
            booking.push({...data,booking_id:rooms[roomIdx].booking_id})
    res.send({message:'Room booked successfully'})
    }else{
        res.send({message:'the rooms is not available'})
    }
})
export default roomBookRouter;