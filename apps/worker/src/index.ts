import { createServer } from "node:http";

const server = createServer((request, response) => {
  if (request.method === "GET" && request.url === "/health") {
    response.writeHead(200, { "Content-Type": "text/plain; charset=utf-8" });
    response.end("ok");
    return;
  }

  response.writeHead(404);
  response.end();
});

const port = Number(process.env.PORT ?? 3001);
server.listen(port, () => {
  console.log(`Worker listening on port ${port}`);
});
