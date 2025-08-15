import express from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';

const app = express();

app.use(cors({
    origin: process.env.CROSS_ORIGIN,
    credentials: true
}))

app.use(express.json({limit: "16kb"}))  // it receive json data Atmost 16kb
app.use(express.urlencoded({extended: true, limit: "16kb"})) // it encode url params data 
app.use(express.static("public"))  // it store static data like image favicon
app.use(cookieParser())

export { app }