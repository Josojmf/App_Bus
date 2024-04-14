import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import UserDataType from "../db/UserData.ts";
import { InputLogin } from "../islands/Login.tsx";

export const Handler: Handlers = {
  GET: async (req: Request, ctx: FreshContext) => {
    console.log("Handler");
    const data = await req.formData();
    console.log(data);
    const name = data.get("name");
    const surname = data.get("surname");
    const email = data.get("email");
    const stops = data.getAll("stops");
    console.log(name, surname, email, stops);
    const user = {
      name: name,
      surname: surname,
      email: email,
      stops: stops,
    };
    const upload = await UserDataType.create(user);
    // return new Response(JSON.stringify(upload));
    return new Response(JSON.stringify(user));
  },
};
const Page = (props: PageProps) => {
  return (
    <div>
      <h1>Register</h1>
      <InputLogin />
    </div>
  );
};
export default Page;
