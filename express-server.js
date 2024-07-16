import express from 'express'
import roomRouter from './room.js';
import roomBookRouter from './book_room.js';
import allRoomsRouter from './get-rooms.js';
import customersRouter from './get-customers.js';
import customersListRouter from './customer-list.js';
const server = express()
server.use(express.json())
server.use('/room',roomRouter)
server.use('/booking',roomBookRouter)
server.use('/rooms',allRoomsRouter)
server.use('/customers',customersRouter)
server.use('/customer-list',customersListRouter)
const port= 5000;
server.listen(port,()=>{
    console.log(Date().toString(),"express port : " ,port)
})