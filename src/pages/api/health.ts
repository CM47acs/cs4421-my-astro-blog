import type { APIRoute } from "astro";

export const GET: APIRoute = async () => {
  return new Response(JSON.stringify({ uptime: process.uptime() }), {
    headers: { "content-type": "application/json" },
  });
};