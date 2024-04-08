import { FunctionComponent } from "https://esm.sh/v128/preact@10.19.6/src/index.js";
const InputFormSearch: FunctionComponent = () => {
  return (
    <form action="/searchStopLinesArrival" method="get" className="SearchStopArrival">
      <input type="text" placeholder="" name="stop"></input>
      <button type="submit">Search Lines</button>
    </form>
  );
};
export default InputFormSearch;
