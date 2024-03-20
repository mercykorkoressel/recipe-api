import { RecipeModel } from "../models/recipe.js";


export const addRecipe =async (req ,res) =>{
   //Add Recipe to the Database
   const createResult = await RecipeModel.create(req.body)
   //Return response
   res.json(createResult)
 }

 export const getRecipes =(req ,res) =>{
    res.send("get recipes" )
 }

 export const getRecipe = (req ,res) =>{
    res.send(`get todo with id: ${req.params.id}`)
 }

 export const updateRecipe =(req ,res) =>{
    res.send(`update recipes with id: ${req.params.id}`)
 }

 export const deleteRecipe =(req ,res) =>{
    res.send(`delete todo with id: ${req.params.id}`)
 }