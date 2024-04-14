import mongoose from "npm:mongoose";
import { model, Schema } from "npm:mongoose@^6.7";
import { UserDataType } from "../types.ts";


export const UserData = new Schema({ 
  name: String, 
  surname: String,
   email: String,
    stops: [String], 
  });

export default model("UserDataModel", UserData);
