import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import axios from "npm:axios";
import { Stop, StopData } from "../types.ts";
import StopDataComponent from "../components/StopData.tsx";
import InputFormSearch from "../islands/InputLineArrival.tsx";

export const handler: Handlers = {
  POST: async (req: Request, ctx: FreshContext) => {
    const url = new URL(req.url);
    console.log("Inside Search  ");
    const stop = url.searchParams.get("stop") || "5844";
 
    const APIURLDATASTOP =
      `https://openapi.emtmadrid.es/v1/transport/busemtmad/stops/${stop}/arrives`;
    const accessToken = "20cf9107-ea42-49a1-b254-c20a05a39d60";
    const body = {
      "statistics": "N",
      "cultureInfo": "EN",
      "Text_StopRequired_YN": "Y",
      "Text_EstimationsRequired_YN": "Y",
      "Text_IncidencesRequired_YN": "Y",
      "DateTime_Referenced_Incidencies_YYYYMMDD": "20180823",
    };
    const responseDataStop = fetch(APIURLDATASTOP, {
      method: "POST",
      headers: new Headers({
        "accessToken": accessToken,
        "content-type": "application/json",
      }),
      body: JSON.stringify(body),
    }) as unknown as StopData;
    return ctx.render(responseDataStop);
  }
} 
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
