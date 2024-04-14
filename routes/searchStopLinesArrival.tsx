import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import axios from "npm:axios";

import InputFormSearch from "../islands/InputLineArrival.tsx";
import StopDataComp from "../components/StopDataComp.tsx";
import { ArriveType } from "../types.ts";
import Arrivals from "../components/Arrivals.tsx";

export const handler: Handlers = {
  GET: async (req: Request, ctx: FreshContext) => {
    const url = new URL(req.url);
    const stop = url.searchParams.get("stop") || "5844";
    const APIURLDATASTOP = `https://openapi.emtmadrid.es/v1/transport/busemtmad/stops/${stop}/arrives`;
    const accessToken = Deno.env.get("ACCESSTOKEN") || "";
    const body = {
      statistics: "N",
      cultureInfo: "EN",
      Text_StopRequired_YN: "Y",
      Text_EstimationsRequired_YN: "Y",
      Text_IncidencesRequired_YN: "Y",
      DateTime_Referenced_Incidencies_YYYYMMDD: "20180823",
    };
    const responseDataStop = await fetch(APIURLDATASTOP, {
      method: "POST",
      redirect: "follow",
      headers: new Headers({
        accessToken: accessToken,
      }),
      body: JSON.stringify(body),
    });
    const response = await responseDataStop.json();
    const Arrive = response.data[0].Arrive as ArriveType[];
    return ctx.render(Arrive);
  },
};
const Page = (props: PageProps<ArriveType[]> | undefined) => {
  const dataTest = props!.data as ArriveType[];
  if (!props) {
    return <div>Loading...</div>;
  } else {
    return (
      <div>
        <InputFormSearch />

        <div className="ArrivalsContainer">
          {dataTest.map((data:ArriveType) => (
            
            <Arrivals Stop={data} />
          ))}
        </div>
      </div>
    );
  }
};
export default Page;
