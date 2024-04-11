import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import axios from "npm:axios";

import InputForm from "../islands/Input.tsx";
import InputFormSearch from "../islands/InputLineArrival.tsx";
import { StopData } from "../types.ts";
import Input from "../islands/Input.tsx";

const Page = (props: PageProps | undefined) => {
    if (!props) {
      return <div>Loading...</div>;
    } else {
      return (
        <div>
          <Input />
        </div>
      );
    }
  };
  export default Page;