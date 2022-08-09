import { Application } from "https://deno.land/x/oak/mod.ts";

const app = new Application();

// deno-lint-ignore no-explicit-any
app.use(async (context:any, next:any) => {
  try {
    await context.send({
      root: `${Deno.cwd()}/`,
      index: "home.html",
    });
  } catch {
    await next();
  }
});

await app.listen({ port: 8000 }).then(()=>{console.log("Deno server listening on port 8000")});
