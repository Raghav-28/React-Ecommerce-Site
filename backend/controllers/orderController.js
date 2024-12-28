import orderModel from "../models/orderModel.js";
import userModel from "../models/userModel.js";


// Placing Orders using COD

const placeOrder = async (req,res)=>{
    try {
        const {userId, items, amount, address}= req.body;
        if (!userId || !items || !amount || !address) {
            return res.status(400).json({ success: false, message: "Invalid input data" });
        }
        const orderData = {
            userId,
            items,
            amount,
            address,
            paymentMethod:"COD",
            payment:false,
            date:Date.now()
        }

        const newOrder = new orderModel({...orderData})
        await newOrder.save()

        await userModel.findByIdAndUpdate(userId,{cartData:{}})

        res.json({success:true,message:"Order Placed"})


    } catch (error) {
        console.log(error)
        res.json({success:false,message:error.message})
    }
}

// Placing Orders using Stripe

const placeOrderStripe = async (req,res)=>{
    
}

// Placing Orders using Razorpay

const placeOrderRazorpay = async (req,res)=>{
    
}
// All Orders Data fro admin pannel


const allOrders = async (req,res)=>{
    
}
// User Order data for frontend

const userOrders = async (req,res)=>{
    try {
        
        const {userId}= req.body
        const orders = await orderModel.find({ userId})
        res.json({success:true,orders})

    } catch (error) {
        console.log(error)
        alert(error.message)
    }
}
// Update order status

const updateStatus = async (req,res)=>{
    
}

export {placeOrder,placeOrderStripe,placeOrderRazorpay,allOrders,userOrders,updateStatus}