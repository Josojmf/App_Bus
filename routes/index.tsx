import { FreshContext, Handlers } from "$fresh/server.ts";
import axios from "npm:axios";
import Input from "../islands/Input.tsx";
import InputFormSearch from "../islands/InputLineArrival.tsx";

export default function Home() {
  return (
    <div>
      
      <Input></Input>
      <InputFormSearch></InputFormSearch>
    </div>
  );
}