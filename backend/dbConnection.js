import mongoose  from "mongoose";

export default function connectDB(){
   mongoose.connect("mongodb://localhost:27017/SportsBet_Pro")
   .then(()=>{
      console.log("DB connected ")
   })
   .catch((err)=>{
      console.log("some error "+err)
      
   })
}

