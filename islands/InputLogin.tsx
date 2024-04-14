import { FunctionComponent } from "https://esm.sh/v128/preact@10.19.6/src/index.js";

const InputFormSearch: FunctionComponent = () => {
  return (
    <div>
      <h1>Register</h1>
      <form method="GET" className="LoginForm" action="/loginresult">
        <label>
          Name:
          <input type="text" name="name" required />
        </label>
        <label>
          Surname:
          <input type="text" name="surname" required />
        </label>
        <label>
          Email:
          <input type="email" name="email" required />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default InputFormSearch;
