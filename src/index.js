// require('dotenv').config({path: './env'})
// import mongoose from "mongoose";
// import { DB_NAME } from "./constants.js";
// import express from "express";
import dotenv from "dotenv"
import connecttDB from "./db/index.js";
import { app } from "./app.js";

dotenv.config({
    path: "./.env"
})
// const app = express();

const prot = process.env.PORT || 8000;
connecttDB()
.then(() =>{
    app.on("error", (error) =>{
        console.error("Database connected but app is not listening: ",error)
        throw error
    });
    app.listen(prot,() =>{
        console.log(`server is running on port ${prot}`)
    })
})
.catch((error) =>{
    console.log(`MongoBD connection field !! ${error}`)
})





/* use IIFE for database connection(
remember 2 things
1. always use async/await
2. always write in try-catch
);
*/
/*
;(async() =>{
    try {
        // for database connection give url and database name
        await mongoose.connect(`${process.env.DATABASE_URI}/${DB_NAME}`)
        app.on("error", (error) =>{
            console.error("Database connected but app is not listening: ",error)
            throw error
        });
        app.listen(`${process.env.PORT}`,()=>{
            console.log("App is listening on PORT: ",process.env.PORT)
        })
    } catch (error) {
        console.log("error when database connect: ",error);
        throw error;    
    }
})()

*/