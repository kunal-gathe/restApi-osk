import mongoose from "mongoose";

const connectDB =(uri)=>{
    console.log("Connect Db");
    mongoose.connect(uri)
}

export default connectDB
