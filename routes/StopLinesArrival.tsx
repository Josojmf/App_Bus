import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import axios from "npm:axios";
import { Stop, StopData } from "../types.ts";
import StopDataComponent from "../components/StopData.tsx";
import InputForm from "../islands/Input.tsx";
import InputFormSearch from "../islands/InputLineArrival.tsx";

export const handler: Handlers = {
  POST: async (req: Request, ctx: FreshContext) => {
    const url = new URL(req.url);
    console.log("Inside Search  ");
    const stop = url.searchParams.get("stop") || "5844";
 
    const APIURLDATASTOP =
      `https://openapi.emtmadrid.es/v1/transport/busemtmad/stops/5844/arrives/`;
      const accessToken = "20cf9107-ea42-49a1-b254-c20a05a39d60";
    if (accessToken) {
      const responseDataStop = await axios.get(APIURLDATASTOP, {
        headers: { accessToken },
      });
      const responseData = responseDataStop.data.data[0] as StopData;
      console.log("Inside Search  ");
      console.log(responseData);
      return ctx.render(responseData.stops);
    } 
    else {
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
        <InputFormSearch />
      </div>
    );
  }
};
export default Page;
