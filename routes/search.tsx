import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import axios from "npm:axios";
import { Stop, StopData } from "../types.ts";
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
      `https://openapi.emtmadrid.es/v1/transport/busemtmad/stops/${stop}/detail`;
    const responseLogin = await axios.get(APIURLLogin, { headers });
    const accessToken = responseLogin.data.data[0].accessToken;
    if (responseLogin.status === 200) {
      const responseDataStop = await axios.get(APIURLDATASTOP, {
        headers: { accessToken },
      });
      const responseData = responseDataStop.data.data[0] as StopData;
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
      <StopDataComponent {...props} />
      </div>
    );
  }
};
export default Page;