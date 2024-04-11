import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import axios from "npm:axios";

import InputForm from "../islands/Input.tsx";


export const handler: Handlers = {
  GET: async (req: Request, ctx: FreshContext) => {
    const url = new URL(req.url);
    const stop = url.searchParams.get("stop") || "5844";
    const headers = {
      email: "joso.jmf@gmail.com",
      password: "lyoko3110J",
    };
    const APIURLLogin =
      "https://openapi.emtmadrid.es/v1/mobilitylabs/user/login/";
    const APIURLDATASTOP =
      `https://openapi.emtmadrid.es/v1/transport/busemtmad/calendar/2024120/<2024125>/
      `;
    const responseLogin = await axios.get(APIURLLogin, { headers });
    const accessToken = responseLogin.data.data[0].accessToken;
    if (responseLogin.status === 200) {
      const responseDataStop = await axios.get(APIURLDATASTOP, {
        headers: { accessToken },
      });
      const responseData = responseDataStop ;
      console.log(responseData);
      return ctx.render(responseData);
    } else {
      return ctx.render("Failed To Login");
    }
  },
};
const Page = (props: PageProps | undefined) => {
  if (!props) {
    return <div>Loading...</div>;
  } else {
    return (
      <div>
        <InputForm />
      </div>
    );
  }
};
export default Page;