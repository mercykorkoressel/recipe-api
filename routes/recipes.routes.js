import { Router } from "express";
import multer from "multer";

import { addRecipe, deleteRecipe, getRecipe, getRecipes, updateRecipe } from "../controllers/recipes.controller.js";

//configure upload middleware
const upload=multer({dest:'uploads/images'});

 const router =Router();


 router.post("/recipes" , upload.single('image'),addRecipe )


 router.get("/recipes" ,getRecipes )


 router.get("/recipes/:id" , getRecipe)


 router.patch("/recipes/:id" ,updateRecipe )

 router.delete("/recipes/:id" , deleteRecipe)

 export default router

 
 

