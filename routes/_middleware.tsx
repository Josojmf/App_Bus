import { FreshContext } from "$fresh/server.ts";
import mongoose from "npm:mongoose";

export async function handler(req: Request, ctx: FreshContext) {
  const resp = await ctx.next();
  if (mongoose.connection.readyState === 0) {
    await mongoose.connect(Deno.env.get("MONGO_URL")!);
    const db = mongoose.connection;
  }
  //const CarSchema = new mongoose.Schema<Car>({ make: String, model: String, fuel_type: String, drive: String, cylinders: Number });
  //export default mongoose.model<Car>("Car", CarSchema);
  return resp;
}
