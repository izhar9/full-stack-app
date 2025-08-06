import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connecttDB = async() =>{
    try {
        const connectionInstance = await mongoose.connect(`${process.env.DATABASE_URI}/${DB_NAME}`)
        console.log(`\n MongoDB connected !! DB HOST ${connectionInstance.connection.host}`)
    } catch (error) {
        console.log("error when database connect: ",error);
        process.exit(1)
    }
}

export default connecttDB