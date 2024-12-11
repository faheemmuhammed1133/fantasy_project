import  express  from "express";
import connectDB from "./dbConnection.js";
import cors from "cors"

connectDB()
const app =express();

app.use(cors())

//inbuilt middlewares
app.use(express.json())



app.listen(8000,()=>{
   console.log("server up running at port 8000")
})