import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import axios from "npm:axios";
import { Stop, StopData } from "../types.ts";
import StopDataComponent from "../components/StopData.tsx";
import InputForm from "../islands/Input.tsx";


export const handler: Handlers = {
  POST: async (req: Request, ctx: FreshContext) => {
    const url = new URL(req.url);
    const stop = url.searchParams.get("stop") || "5844";
 
    const APIURLLogin =
      "https://openapi.emtmadrid.es/v1/mobilitylabs/user/login/";
    const APIURLDATASTOP =
      `https://openapi.emtmadrid.es/v1/transport/busemtmad/stops/${stop}/arrives`;  
    const accessToken = "20cf9107-ea42-49a1-b254-c20a05a39d60";
    console.log(accessToken);
      const responseDataStop = await axios.post(APIURLDATASTOP, {
        headers: { accessToken },
      });
      const responseData = responseDataStop.data.data[0] as StopData;
      return ctx.render(responseData);
    } 
  }
const Page = (props: PageProps | undefined) => {
  if (!props) {
    return <div>Loading...</div>;
  } else {
    console.log(props)
    return (
      <div>
        <InputForm />
      </div>
    );
  }
};
export default Page;
