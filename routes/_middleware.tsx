import { FreshContext } from "$fresh/server.ts";
import mongoose from "npm:mongoose";
import { getSessionAccessToken, getSessionId } from "kv_oauth/mod.ts";

export async function handler(req: Request, ctx: FreshContext) {
  const resp = await ctx.next();
  const sessionId = await getSessionId(req);
  const isSignedIn = sessionId !== undefined;
  const accessToken = isSignedIn;
  return resp;
}
