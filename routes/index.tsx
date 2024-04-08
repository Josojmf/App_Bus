import { FreshContext, Handlers } from "$fresh/server.ts";
import axios from "npm:axios";
import Input from "../islands/Input.tsx";
import InputFormSearch from "../islands/InputLineArrival.tsx";
export type LoginResponse = {
  data: Data;
  code: number;
  description: string;
};
export type Data = {
  accessToken: string;
  tokenSecExpiration: number;
  tokenType: string;
};

export default function Home() {
  return (
    <div>
      <h1>Home</h1>
      <Input></Input>
      <InputFormSearch></InputFormSearch>
      <a href="/search">Search</a>
      <br />
      <a href="/StopLinesArrival">StopLinesArrival</a>
    </div>
  );
}
