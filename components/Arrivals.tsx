import { FunctionComponent } from "https://esm.sh/v128/preact@10.19.2/src/index.js";
import { Stop, ArriveType } from "../types.ts";

const StopDataComp: FunctionComponent<{ Stop: ArriveType }> = (props) => {
  const data_received: ArriveType = props.Stop;
  return (
    <div className="StopInfo">
      <div>
        <h1>{data_received.line}</h1>
        <div className="ArriveTime">
          <p>Destination: {data_received.destination}</p>
          <p>Tiempo: {Math.round(parseInt(data_received.estimateArrive)/60)}Minutos</p>
        </div>
      </div>
    </div>
  );
};
export default StopDataComp;
