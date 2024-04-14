import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import { UserData } from "../db/UserData.ts";
import { InputLogin } from "../islands/Login.tsx";
import { model, Schema } from "npm:mongoose@^6.7";
import mongoose from "npm:mongoose";
import { UserDataType } from "../types.ts";
import { getSessionAccessToken, getSessionId } from "kv_oauth/mod.ts";
import { OAuth2Client } from "kv_oauth/deps.ts";

export const Handler: Handlers = {
  POST: async (req: Request, ctx: FreshContext<unknown, UserDataType>) => {
    console.log("Handler");
    const url = new URL(req.url);
    const searchParams = url.searchParams;
    console.log(searchParams);
    const data = await req.formData();
    console.log(data);
    const name = data.get("name");
    const surname = data.get("surname");
    const email = data.get("email");
    const stops = data.getAll("stops");
    console.log(name, surname, email, stops);
    console.log(name, surname, email, stops);
    const user = {
      name: name,
      surname: surname,
      email: email,
      stops: stops,
    };
    const userSchema = new Schema({
      name: String,
      surname: String,
      email: String,
      stops: [String],
    });
    userSchema.path("name").required(true);
    userSchema.path("surname").required(true);
    userSchema.path("email").required(true);
    userSchema.path("stops").required(true);
    if (mongoose.connection.readyState === 0) {
      console.log("Connecting to MongoDB");
      const MongoUrl: string = Deno.env.get("MONGO_URL") || "";
      const db = await mongoose.connect(MongoUrl);
      console.log("Connected to MongoDB");
    }
    return ctx.render();
    // return new Response(JSON.stringify(upload));
  },
};
const Page = (props: PageProps) => {
  return (
    <div>
      <InputLogin />
    </div>
  );
};
export default Page;
