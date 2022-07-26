import mongoose from "mongoose";

const orderSchema = mongoose.Schema({
    name:{
        type: mongoose.Schema.Types.ObjectId,
        required:true,
        ref:'User',
    },
    orderItems:[
        {
            name:{type:String, required:true},
            qty:{type:Number, required:true},
            image:{type:String, required:true},
            price:{type:Number, required:true} ,
            product:{
                type: mongoose.Schema.Types.ObjectId, 
                required:true,
                ref:'Product'
            } 
        }
    ],
    shippingAddress:{
       address:{type:String, required:true},
       city:{type:String, required:true},
       state:{type:String, required:true},
       postal:{type:Number , required:true},
       country:{type:String, required:true},
    },
    paymentMethod:{
        required:true,
        type:String,
    },
    paymentResult:{
        id: {type:String},
        status: {type:String},
        update_time: {type:String},
        email_address: {type:String},
    },
    taxPrice:{
        required:true,
        type:Number,
        default:0.00
    },
    shippingPrice:{
        required:true,
        type:Number,
        default:0.00
    },
    totalPrice:{
        required:true,
        type:Number,
        default:0.00
    },
    isPaid:{
        required:true,
        type:Boolean,
        default:false
    },
    paidAt:{
        type:Date,
    },
    isDelivered:{
        required:true,
        type:Boolean,
        default:false
    },
    deliveredAt:{
        type:Date
    }
},{
    timestamps: true
})

const Order = mongoose.model('order',orderSchema)

export default Order