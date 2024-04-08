import { FunctionComponent } from "https://esm.sh/v128/preact@10.19.6/src/index.js";
const InputFormSearch: FunctionComponent = () => {
  return (
    <form action="/search" method="get" className="SearchStop">
      <input type="text" placeholder="Stop Number" name="stop"></input>
      <button type="submit">Search</button>
    </form>
  );
};
export default InputFormSearch;
