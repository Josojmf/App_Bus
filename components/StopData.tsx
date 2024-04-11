import { FunctionComponent } from "https://esm.sh/v128/preact@10.19.2/src/index.js";
import { type PageProps } from "$fresh/server.ts";
import { Stop } from "../types.ts";


const StopDataComponent: FunctionComponent<PageProps> = (props) => {
    const data_received: Stop = props.data[0];
    return (
        <div className="Stop">
        <h1>Stop</h1>
        <div>
          <h1>{data_received.name}</h1>
            <p>Numero de Parada:{data_received.stop}</p>
            <p>Dirección:{data_received.postalAddress}</p>
            <p>Coordenadas:{data_received.geometry.coordinates}</p>
            <p>{data_received.pmv}</p>
        </div>
        </div>
    );
    }
export default StopDataComponent;