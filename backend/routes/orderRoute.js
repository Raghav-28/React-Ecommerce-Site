import express from 'express'
import adminAuth from '../middleware/adminAuth.js'
import { updateStatus,placeOrder,placeOrderStripe,userOrders,allOrders, verifyStripe } from '../controllers/orderController.js'
import authUser from '../middleware/auth.js'


const orderRouter = express.Router()

orderRouter.post('/list',adminAuth,allOrders);
orderRouter.post('/status',adminAuth,updateStatus);

//payment features
orderRouter.post('/place',authUser,placeOrder);
orderRouter.post('/stripe',authUser,placeOrderStripe);
// orderRouter.post('/razorpay',authUser,placeOrderRazorpay);


//user feature
orderRouter.post('/userorders',authUser,userOrders)
//verify payment
orderRouter.post('/verifyStripe',authUser,verifyStripe)
export default orderRouter