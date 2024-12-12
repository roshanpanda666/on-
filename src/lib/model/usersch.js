import mongoose from "mongoose";

const userModel= new mongoose.Schema({
    online:String,
    uid:String,
    name:String,
})

export const Users = mongoose.models.on || mongoose.model("on",userModel)