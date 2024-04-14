// server.ts
import { createGitHubOAuthConfig, createHelpers } from "jsr:@deno/kv-oauth";

const {
  signIn,
  handleCallback,
  signOut,
  getSessionId,
} = createHelpers(createGitHubOAuthConfig(), {
  cookieOptions: {
    name: "__Secure-triple-choc",
    domain: "news.site",
  },
});

async function handler(request: Request) {
  const { pathname } = new URL(request.url);
  switch (pathname) {
    case "/oauth/signin":
      return await signIn(request);
    case "/oauth/callback":
      const { response } = await handleCallback(request);
      return response;
    case "/oauth/signout":
      return await signOut(request);
    case "/protected-route":
      return await getSessionId(request) === undefined
        ? new Response("Unauthorized", { status: 401 })
        : new Response("You are allowed");
    default:
      return new Response(null, { status: 404 });
  }
}

Deno.serve(handler);