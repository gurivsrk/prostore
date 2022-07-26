import mongoose from "mongoose";
import dotenv from "dotenv"
import colors from "colors";
import User from "./models/userModel.js";
import Product from "./models/productModel.js";
import users from "./data/User.js";
import products from "./data/Products.js";
import Order from "./models/orderModel.js";
import connectDB from "./config/db.js";

dotenv.config();

connectDB();



const importData = async () => {
    try {
        await Order.deleteMany() 
        await Product.deleteMany() 
        await User.deleteMany()
        
        const creatUsers = await User.insertMany(users)

        const adminUser = creatUsers[0]._id

        const sampleProducts =  products.map(product => {
            return {...product, user: adminUser}
        }) 

        await Product.insertMany(sampleProducts)

        console.log('Data Import!'.green.inverse)
        process.exit()
    } catch (error) {
        console.error(`${error}`.red.inverse)
        process.exit(1)
    }
}
const destroyData = async () => {
    try {
        await Order.deleteMany() 
        await Product.deleteMany() 
        await User.deleteMany()
        console.log('Data Destroyed!'.green.inverse)
        process.exit()
    } catch (error) {
        console.error(`${error}`.red.inverse)
        process.exit(1)
    }
}



if(process.argv[2] === "-d"){
    destroyData()
}else{
    importData()
}