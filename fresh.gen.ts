// DO NOT EDIT. This file is generated by Fresh.
// This file SHOULD be checked into source version control.
// This file is automatically updated during development when running `dev.ts`.

import * as $Stop from "./routes/Stop.tsx";
import * as $StopLinesArrival from "./routes/StopLinesArrival.tsx";
import * as $_404 from "./routes/_404.tsx";
import * as $_app from "./routes/_app.tsx";
import * as $_layout from "./routes/_layout.tsx";
import * as $_middleware from "./routes/_middleware.tsx";
import * as $calendar from "./routes/calendar.tsx";
import * as $index from "./routes/index.tsx";
import * as $login from "./routes/login.tsx";
import * as $search from "./routes/search.tsx";
import * as $searchStopLinesArrival from "./routes/searchStopLinesArrival.tsx";
import * as $Input from "./islands/Input.tsx";
import * as $InputLineArrival from "./islands/InputLineArrival.tsx";
import * as $Login from "./islands/Login.tsx";
import { type Manifest } from "$fresh/server.ts";

const manifest = {
  routes: {
    "./routes/Stop.tsx": $Stop,
    "./routes/StopLinesArrival.tsx": $StopLinesArrival,
    "./routes/_404.tsx": $_404,
    "./routes/_app.tsx": $_app,
    "./routes/_layout.tsx": $_layout,
    "./routes/_middleware.tsx": $_middleware,
    "./routes/calendar.tsx": $calendar,
    "./routes/index.tsx": $index,
    "./routes/login.tsx": $login,
    "./routes/search.tsx": $search,
    "./routes/searchStopLinesArrival.tsx": $searchStopLinesArrival,
  },
  islands: {
    "./islands/Input.tsx": $Input,
    "./islands/InputLineArrival.tsx": $InputLineArrival,
    "./islands/Login.tsx": $Login,
  },
  baseUrl: import.meta.url,
} satisfies Manifest;

export default manifest;
