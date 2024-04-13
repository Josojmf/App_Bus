import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import UserDataType from "../db/UserData.ts";
import { InputLogin } from "../islands/Login.tsx";

export const Handler: Handlers = {
  POST: async (req: Request, ctx: FreshContext) => {
    console.log("Handler");
    const url = new URL(req.url);
    console.log(url);
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
    // const upload = await UserDataType.create(user);
    // return new Response(JSON.stringify(upload));
    return new Response(JSON.stringify(user));
  },
};
const Page = (props: PageProps) => {
  return (
    <div>
      <h1>Register</h1>
      <div>
        <h1>Register</h1>
        <form method="POST" className="LoginForm" action="/login">
          <label>
            Name:
            <input type="text" name="name" required />
          </label>
          <label>
            Surname:
            <input type="text" name="surname" required />
          </label>
          <label>
            Email:
            <input type="email" name="email" required />
          </label>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};
export default Page;
