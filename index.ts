import {
  Application,
  Context,
  Next,
} from "https://deno.land/x/oak@v10.6.0/mod.ts";

const app = new Application();

app.use(async (context: Context, next: Next) => {
  try {
    await context.send({
      root: `${Deno.cwd()}/`,
      index: "index.html",
    });
  } catch {
    await next();
  }
});

await app.listen({ port: 8000 });
console.log("Server started on port 8000");
