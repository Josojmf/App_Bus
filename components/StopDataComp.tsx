import { FunctionComponent } from "https://esm.sh/v128/preact@10.19.2/src/index.js";
import { type PageProps } from "$fresh/server.ts";
import { ArriveType, Stop } from "../types.ts";

const StopDataComp: FunctionComponent<{ Stop: Stop }> = (props) => {
  const data_received: Stop = props.Stop;
  type dataLine = {
    line: string;
    label: string;
    direction: string;
    maxFreq: string;
    minFreq: string;
    headerA: string;
    headerB: string;
    startTime: string;
    stopTime: string;
    dayType: string;
  };
  const dataLines = data_received.dataLine;
  return (
    <div className="Stop">
      <h1>{data_received.stop}</h1>
      <div>
        <p>Direccion:{data_received.postalAddress}</p>
        <p>Lineas:</p>
        <div>
          {dataLines.map((line) => (
            <div>
              <p>Linea:{line.line}</p>
              <p>Label:{line.label}</p>
              <p>Direccion:{line.direction}</p>
              <p>Frecuencia Maxima:{line.maxFreq}</p>
              <p>Frecuencia Minima:{line.minFreq}</p>
              <p>HeaderA:{line.headerA}</p>
              <p>HeaderB:{line.headerB}</p>
              <p>Inicio:{line.startTime}</p>
              <p>Fin:{line.stopTime}</p>
              <p>Tipo de Dia:{line.dayType}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default StopDataComp;
