import { FunctionComponent } from "https://esm.sh/v128/preact@10.19.2/src/index.js";
import { type PageProps } from "$fresh/server.ts";
import {
  ArriveType,
  Dataline,
  datalineContent,
  Geometry,
  Stop,
  StopData,
  StopResponse,
} from "../types.ts";

const StopDataComp: FunctionComponent<{ Stop: ArriveType }> = (props) => {
  const data_received: ArriveType = props.Stop;
  const tiempo_espera_minutos = parseInt(data_received.estimateArrive) / 60;
  return (
    <div className="Stop">
      <h1>{data_received.stop}</h1>
      <div>
        <p>Numero de Parada:{data_received.stop}</p>
        <p>Lines:{data_received.line}</p>
        <p>Tiempo Espera:{tiempo_espera_minutos}</p> 
        <p> Distancia: {data_received.DistanceBus} metros </p>
        <p>Destino:{data_received.destination}</p>
      </div>
    </div>
  );
};
export default StopDataComp;
