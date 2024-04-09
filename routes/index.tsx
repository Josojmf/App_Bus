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
      
      <Input></Input>
      <InputFormSearch></InputFormSearch>
    </div>
  );
}
