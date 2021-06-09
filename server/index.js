import path from "path";
import { fastify } from "fastify";
import * as Router from "./routes";

const dev = process.env.DEV === "true";

// STATIC
const pathStaticDir = path.resolve(__dirname, "./static");

// init
const _fastify = fastify({
  ignoreTrailingSlash: true,
  logger: true,
});

_fastify.register(require("fastify-compress"));
_fastify.register(require("fastify-static"), {
  root: pathStaticDir,
});

// 라우터 초기화
Router.init(_fastify);

_fastify.listen(process.env.PORT || "8888", "0.0.0.0", function (err, address) {
  if (err) {
    fastify.log.error(err);
    process.exit(1);
  }
  _fastify.log.info(`server listening on ${address}`);
});
