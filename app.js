import express from "express";
import recipesRoute from "./routes/recipes.routes.js";
import dotenv  from "dotenv"
import mongoose from "mongoose";
import cors from "cors"

dotenv.config()




const app =express();

const port =process.env.PORT ||7000


app.use(express.json())
app.use(express.urlencoded({ extended: false }));
app.use(cors)



app.use(recipesRoute)



//make database connection 
await mongoose.connect(process.env.MONGO_URI);


app.listen(port, () =>{
    console.log(`express is running ${port} `)
}
)