import express from 'express'
import adminAuth from '../middleware/adminAuth.js'
import { updateStatus,placeOrder,placeOrderRazorpay,placeOrderStripe,userOrders,allOrders, verifyStripe, verifyRazorpay } from '../controllers/orderController.js'
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
orderRouter.post('/verifyRazorpay',authUser,verifyRazorpay)
export default orderRouter