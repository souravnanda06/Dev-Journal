import express from 'express'
import 'dotenv/config'
import authroutes from './routes/authroutes.js'
import dashRoute from './routes/dashRoute.js'
import Connectdb from './config/db.js'
import createRoute from './routes/createRoute.js'
import journalRoute from './routes/journalRoute.js'
import deleteRoute from './routes/deleteRoute.js'
import cors from 'cors'
const app = express();

const PORT = 3000;
app.use(express.json());
app.use(cors());
app.use('/api/auth',authroutes);
app.use("/api/dev-journal",dashRoute);
app.use("/api/dev-journal",createRoute);
app.use("/api/dev-journal",journalRoute);
app.use("/api/dev-journal",deleteRoute);
Connectdb();
app.listen(PORT,()=>{
    console.log('http://localhost:3000/')
});