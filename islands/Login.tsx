import React, { FunctionComponent } from "https://esm.sh/react@17.0.2";

export const InputLogin: FunctionComponent = () => {
    return (
      <div>
        <h1>Register</h1>
        <form method="GET" className="LoginForm" action="/login">
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
  
  