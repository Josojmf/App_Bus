import { FreshContext } from "$fresh/server.ts";
import mongoose from "npm:mongoose";
import { UserDataType } from "../types.ts";


if (mongoose.connection.readyState === 0) {
  await mongoose.connect(Deno.env.get("MONGO_URL")!);
  const db = mongoose.connection;
}
const UserSchema = new mongoose.Schema<UserDataType>({
  name: String,
  surname: String,
  email: String,
  stops: [String],
});
export default mongoose.model<UserDataType>("UserData", UserSchema);
