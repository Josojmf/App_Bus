import { FunctionComponent } from "https://esm.sh/v128/preact@10.19.2/src/index.js";
import { Stop, ArriveType } from "../types.ts";

const StopDataComp: FunctionComponent<{ Stop: ArriveType }> = (props) => {
  const data_received: ArriveType = props.Stop;
  return (
    <div className="Stop">
      <div>
        <p>Numero de Parada:{data_received.stop}</p>
        <p>Nombre:{data_received.destination}</p>
        <p>Linea:{data_received.line}</p>
        <p>Bus:{data_received.bus}</p>
        <p>Distancia:{data_received.DistanceBus}</p>
        <p>Estimacion de Llegada:{Math.round(parseInt((data_received.estimateArrive))/60) } minutos</p>

      </div>
    </div>
  );
};
export default StopDataComp;
