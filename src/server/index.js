"use strict";

import config from "config";
import express from "express";

const port = config.get("port");

const app = express();

app.listen(port, () => {
  console.log("portfolio listening on", port);
});