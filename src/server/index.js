"use strict";

import config from "config";
import express from "express";

import clientRouter from "./routers/clientRouter";

const port = config.get("port");

const app = express();
app.use(clientRouter);

app.listen(port, () => {
  console.log("portfolio listening on", port);
});