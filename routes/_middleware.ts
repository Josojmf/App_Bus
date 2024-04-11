import { FreshContext } from "$fresh/server.ts";
import { connect } from "https://deno.land/x/redis@v0.32.3/mod.ts";
import { createLazyClient } from "https://deno.land/x/redis/mod.ts";

interface State {
  data: string;
}

export async function handler(req: Request, ctx: FreshContext<State>) {
  ctx.state.data = "myData";
  const redisPassword="lEaEvKji0kamNnlZAaq4fRbXKihDzaEP";
  const redis = createLazyClient({ hostname: "redis-16496.c269.eu-west-1-3.ec2.cloud.redislabs.com", port: 16496, password: redisPassword });
  await redis.close();
  return ctx.render({ text: "Hello World"});

}
