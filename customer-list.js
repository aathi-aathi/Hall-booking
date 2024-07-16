import express from 'express'
import { booking, customers, rooms } from './local-variable.js'
const customersListRouter= express.Router()
customersListRouter.get('/:customer',(req,res)=>{
    const customer_name= req.params.customer;
    console.log('customer_name :',customer_name)
      // const data = customers.filter((custom)=>custom.customer_name ==customer_name)
      const room = rooms.filter((room)=>room.customer_name==customer_name)
      console.log(room)
      console.log(room.booking_id,room.status)
      res.send(room.map((customer)=>({
        customer_name : customer.customer_name,
        room_name : customer.room_name,
        date:customer.date,
        start_time:customer.start_time,
        end_time:customer.end_time,
        booking_id:customer.booking_id,
        booking_status:customer.status
    } )))
})
export default customersListRouter;  