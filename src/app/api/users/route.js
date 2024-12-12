import mongoose from "mongoose";
import {connecturi} from "@/lib/database"
import { NextResponse } from "next/server";
import { Users } from "@/lib/model/usersch";
export async function GET(){
    await mongoose.connect(connecturi)
    const data = await Users.find()
    console.log(data);
    return NextResponse.json({result:data})
}