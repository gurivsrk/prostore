import mongoose from "mongoose";

const reviewSchema = mongoose.Schema({
    name:{type:String, required:true},
    rating:{type:Number, required:true},
    comment:{type:String, required:true}
},{ timestamps:true })

const productSchema = mongoose.Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,
        required:true,
        ref:'User'
    },
    name:{
        required:true,
        trim:true,
        type:String
    },
    image:{
        required:true,
        type:String,
        trim:true,
    },
    brand:{
        required:true,
        trim:true,
        type:String
    },
    category:{
        required:true,
        type:String
    },
    description:{
        required:true,
        type:String
    },
    reviews:[reviewSchema],
    rating:{
        required:true,
        type:Number,
        default:0
    },
    numReviews:{
        required:true,
        type:Number,
        default:0
    },
    price:{
        required:true,
        type:Number,
        default:0
    },
    countInStock:{
        required:true,
        type:Number,
        default:0
    },
    
},{
    timestamps: true
})

const Product = mongoose.model('products',productSchema)
//const Review = mongoose.Model('reviews',reviewSchema )

export default Product