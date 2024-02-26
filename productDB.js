import 'dotenv/config'
import connectDB from "./DB/db.js"
import productsData from './product.json' assert { type: "json" };
import Product from './models/product.models.js'
// let productsData = require('./product.json');

const start = async ()=>{
   try {
    await connectDB(process.env.MONGO_URI);
    await Product.create(productsData);
    console.log("Success");
   } catch (error) {
    console.log(error);
   }
}
start()